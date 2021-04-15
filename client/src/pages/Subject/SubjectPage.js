import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SubjectPage = () => {

    return (
        <React.Fragment>
            <h1>Predmet</h1>
            <Formik
                initialValues={{
                    code: '',
                    subjectName: '',
                    tutor: '',
                    numberOfWeeks: 0,
                    numberOfHoursLecture: 0,
                    numberOfHoursSeminar: 0,
                    numberOfHoursExercise: 0,
                    language: '',
                    studyForm: '',
                    typeOfStudy: '',
                    year: 0,
                    semester: 0,
                    terminationMethod: '',
                    numberOfCredits: 0,
                    groupSize: 0,
                    department: ''
                }}

                validate={values => {
                    const errors = {};
                    if (!values.code) {
                        errors.code = 'Toto pole nemůže být prázdné.';
                    }

                    if (!values.subjectName) {
                        errors.subjectName = 'Toto pole nemůže být prázdné.';
                    }

                    if (!values.tutor) {
                        errors.tutor = 'Toto pole nemůže být prázdné.';
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

                    const url = "http://localhost:8000/employee";
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
                    <Field id="code" name="code" placeholder="AK8PO" />
                    <ErrorMessage name='code' component="span" />

                    <label htmlFor="subjectName">Názov</label>
                    <Field id="subjectName" name="subjectName" placeholder="Pokročilé programování" />
                    <ErrorMessage name='subjectName' component="span" />

                    <label htmlFor="tutor">Garant</label>
                    <Field id="tutor" name="tutor" placeholder="Jan Novák" />
                    <ErrorMessage name='tutor' component="span" />

                    <label htmlFor="numberOfWeeks">Počet týždňov</label>
                    <Field
                        id="numberOfWeeks"
                        name="numberOfWeeks"
                        placeholder="16"
                        type="number"
                        min="1"
                        max="53"
                        step="1" />

                    <label htmlFor="numberOfHoursLecture">Počet hodín prednášok</label>
                    <Field
                        id="numberOfHoursLecture"
                        name="numberOfHoursLecture"
                        placeholder=""
                        type="number"
                        min="0"
                        max="999"
                        step="1" />

                    <label htmlFor="numberOfHoursSeminar">Počet hodín seminárov</label>
                    <Field
                        id="numberOfHoursSeminar"
                        name="numberOfHoursSeminar"
                        placeholder=""
                        type="number"
                        min="0"
                        max="999"
                        step="1" />

                    <label htmlFor="numberOfHoursExercise">Počet hodín cvičení </label>
                    <Field
                        id="numberOfHoursExercise"
                        name="numberOfHoursExercise"
                        placeholder="0"
                        type="number"
                        min="0"
                        max="999"
                        step="1" />

                    <label htmlFor="language">Jazyk</label>
                    <Field as="select" name="language">
                        <option value="red">CZ</option>
                        <option value="green">EN</option>
                    </Field>

                    <label htmlFor="studyForm">Forma štúdia</label>
                    <Field as="select" name="studyForm">
                        <option value="red">Prezenčná</option>
                        <option value="green">Kombinovaná</option>
                    </Field>

                    <label htmlFor="typeOfStudy">Typ studia</label>
                    <Field as="select" name="typeOfStudy">
                        <option value="red">Bakalářské studium</option>
                        <option value="green">Magisterské studium</option>
                        <option value="green">Doktorské studium</option>
                    </Field>

                    <label htmlFor="year">Ročník</label>
                    <Field
                        id="year"
                        name="year"
                        placeholder="0"
                        type="number"
                        min="1"
                        max="5"
                        step="1" />

                    <label htmlFor="semester">Semester</label>
                    <Field as="select" name="semester">
                        <option value="red">Zimný</option>
                        <option value="green">Letný</option>
                    </Field>

                    <label htmlFor="terminationMethod">Spôsob zakončenia</label>
                    <Field as="select" name="terminationMethod">
                        <option value="red">Zápočet</option>
                        <option value="green">Klasifikovaný zápočet</option>
                        <option value="green">Skúška</option>
                    </Field>

                    <label htmlFor="numberOfCredits">Počet kreditov</label>
                    <Field
                        id="numberOfCredits"
                        name="numberOfCredits"
                        placeholder="0"
                        type="number"
                        min="0"
                        max="99"
                        step="1" />

                    <label htmlFor="groupSize">Veľkosť skupiny</label>
                    <Field
                        id="groupSize"
                        name="groupSize"
                        placeholder="0"
                        type="number"
                        min="1"
                        max="999"
                        step="1" />


                    <label htmlFor="department">Ústav</label>
                    <Field id="department" name="department" placeholder="Ústav automatizace a řídicí techniky" />
                    <ErrorMessage name='department' component="span" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </React.Fragment>
    )
}

export default SubjectPage;