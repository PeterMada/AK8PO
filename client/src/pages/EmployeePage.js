import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const EmployeePage = () => {

    return (
        <React.Fragment>
            <h1>Zamestnanec</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    workPhone: '',
                    personalPhone: '',
                    workEmail: '',
                    personalEmail: '',
                    phDStudent: false,
                    percentageOfWorkload: '0',
                    workingPointsCZ: '',
                    workingPointsEN: ''
                }}

                validate={values => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = 'Toto pole nemůže být prázdné.';
                    }

                    if (!values.lastName) {
                        errors.lastName = 'Toto pole nemůže být prázdné.';
                    }

                    if (!values.workPhone) {
                        errors.workPhone = 'Toto pole nemůže být prázdné.';
                    }

                    if (!values.percentageOfWorkload) {
                        errors.percentageOfWorkload = 'Toto pole nemůže být prázdné.';
                    }


                    if (!values.workEmail) {
                        errors.workEmail = 'Toto pole nemůže být prázdné.';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.workEmail)) {
                        errors.workEmail = 'Nesprávný formát emailu.';
                    }

                    if (values.personalEmail) {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.personalEmail)) {
                            errors.personalEmail = 'Nesprávný formát emailu.';
                        }
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
                    <label htmlFor="firstName">Meno</label>
                    <Field id="firstName" name="firstName" placeholder="Ján" />
                    <ErrorMessage name='firstName' component="span" />

                    <label htmlFor="lastName">Priezvisko</label>
                    <Field id="lastName" name="lastName" placeholder="novák" />
                    <ErrorMessage name='lastName' component="span" />

                    <label htmlFor="workPhone">Pracovný telefón </label>
                    <Field id="workPhone" name="workPhone" placeholder="0911222502" />
                    <ErrorMessage name='workPhone' component="span" />

                    <label htmlFor="personalPhone">Súkromný telefón </label>
                    <Field id="personalPhone" name="personalPhone" placeholder="0911585965" />
                    <ErrorMessage name='personalPhone' component="span" />

                    <label htmlFor="workEmail">Pracovný email</label>
                    <Field
                        id="workEmail"
                        name="workEmail"
                        placeholder="jannovak@utb.cz"
                        type="email"
                    />
                    <ErrorMessage name='workEmail' component="span" />

                    <label htmlFor="personalEmail">Súkromný email</label>
                    <Field
                        id="personalEmail"
                        name="personalEmail"
                        placeholder="jannovak@acme.com"
                        type="email"
                    />
                    <ErrorMessage name='personalEmail' component="span" />

                    <label htmlFor="phDStudent">Doktorand</label>
                    <Field id="phDStudent" name="phDStudent" type="checkbox" />

                    <label htmlFor="percentageOfWorkload ">Percento úväzku</label>
                    <Field
                        id="percentageOfWorkload"
                        name="percentageOfWorkload"
                        placeholder=""
                        type="number"
                        step="0.1"
                        min="0"
                        max="1" />
                    <ErrorMessage name='percentageOfWorkload' component="span" />

                    <label htmlFor="workingPointsCZ">Pracovné body CZ</label>
                    <Field
                        id="workingPointsCZ"
                        name="workingPointsCZ"
                        placeholder="500"
                        type="number"
                        min="0"
                        max="999999" />

                    <label htmlFor="workingPointsEN">Pracovné body EN</label>
                    <Field
                        id="workingPointsEN"
                        name="workingPointsEN"
                        placeholder="500"
                        type="number"
                        min="0"
                        max="999999" />



                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </React.Fragment>
    )
}

export default EmployeePage;