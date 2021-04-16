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
                    language: 'CZ',
                    studyForm: 'Prezenčná',
                    typeOfStudy: 'Bakalářské studium',
                    year: '1',
                    semester: 'Zimný',
                    terminationMethod: 'Zápočet',
                    numberOfCredits: 0,
                    groupSize: 0,
                    department: 'Ústav automatizace a řídicí techniky'
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

                    const url = "http://localhost:8000/subject";
                    try {
                        const response = await fetch(url, options);
                        console.log(response);
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
                        <option value="CZ">CZ</option>
                        <option value="EN">EN</option>
                    </Field>

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

                    <label htmlFor="terminationMethod">Spôsob zakončenia</label>
                    <Field as="select" name="terminationMethod">
                        <option value="Zápočet">Zápočet</option>
                        <option value="Klasifikovaný zápočet">Klasifikovaný zápočet</option>
                        <option value="Skúška">Skúška</option>
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
                    <Field as="select" name="department">
                        <option value="Ústav automatizace a řídicí techniky">Ústav automatizace a řídicí techniky</option>
                        <option value="Ústav informatiky a umělé inteligence">Ústav informatiky a umělé inteligence</option>
                        <option value="Centrum jazykového vzdělávání">Centrum jazykového vzdělávání</option>
                        <option value="Ústav řízení procesů">Ústav řízení procesů</option>
                    </Field>
                    <ErrorMessage name='department' component="span" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </React.Fragment>
    )
}

export default SubjectPage;