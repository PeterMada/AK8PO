import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const StudyGroupPage = () => {

    return (
        <React.Fragment>
            <h1>Študijná skupina</h1>
            <Formik
                initialValues={{
                    code: '',
                    name: '',
                    studyForm: 'Prezenčná',
                    typeOfStudy: 'Bakalářské studium',
                    language: 'CZ',
                    year: '1',
                    semester: 'Zimný',
                    numberOfStudents: 1
                }}

                validate={values => {
                    const errors = {};
                    if (!values.code) {
                        errors.code = 'Toto pole nemůže být prázdné.';
                    }

                    if (!values.name) {
                        errors.name = 'Toto pole nemůže být prázdné.';
                    }

                    return errors;
                }}
                onSubmit={async (values, { resetForm }) => {
                    const options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(values)
                    };

                    const url = "http://localhost:8000/studyGroup";
                    try {
                        const response = await fetch(url, options);
                        if (response.status === 200) {
                            console.log('Everithing alright');
                            resetForm({});
                        } else {
                            console.log('sometihg went wrong');
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                <Form>
                    <label htmlFor="code">Skratka</label>
                    <Field id="code" name="code" placeholder="SWI" />
                    <ErrorMessage name='code' component="span" />

                    <label htmlFor="name">Názov</label>
                    <Field id="name" name="name" placeholder="Softwarové inženýrství" />
                    <ErrorMessage name='name' component="span" />

                    <label htmlFor="studyForm">Forma štúdia</label>
                    <Field as="select" name="studyForm">
                        <option value="Prezenčná">Prezenčná</option>
                        <option value="Kombinovaná">Kombinovaná</option>
                    </Field>

                    <label htmlFor="typeOfStudy">Typ studia</label>
                    <Field as="select" name="typeOfStudy">
                        <option value="Bakalářské studium">Bakalářské studium</option>
                        <option value="Magisterské studium">Magisterské studium</option>
                        <option value="Doktorské studium">Doktorské studium</option>
                    </Field>

                    <label htmlFor="language">Jazyk</label>
                    <Field as="select" name="language">
                        <option value="CZ">CZ</option>
                        <option value="EN">EN</option>
                    </Field>

                    <label htmlFor="year">Ročník</label>
                    <Field as="select" name="year">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Field>


                    <label htmlFor="semester">Semester</label>
                    <Field as="select" name="semester">
                        <option value="Zimný">Zimný</option>
                        <option value="Letný">Letný</option>
                    </Field>

                    <label htmlFor="numberOfWeeks">Počet študentov v skupine</label>
                    <Field
                        id="numberOfStudents"
                        name="numberOfStudents"
                        placeholder=""
                        type="number"
                        min="1"
                        max="999"
                        step="1" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </React.Fragment>
    )
}

export default StudyGroupPage;