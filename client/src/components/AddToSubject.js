import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const AddToSubject = ({ subjects }) => {
    console.log(subjects);
    return (
        <Formik
            initialValues={{
                code: '',
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
                <label htmlFor="subject">Predmet</label>
                <Field as="select" name="subject">
                    <option value="">--</option>
                    {subjects.map(subject => (
                        <option value={subject.code} key={subject.code}>{subject.subjectName}</option>
                    ))}
                </Field>


                <button type="submit">Uložit</button>
            </Form>
        </Formik>
    )
}

export default AddToSubject;