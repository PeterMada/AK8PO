import React from 'react';
import { Formik, Field, Form } from 'formik';

const EmployeePage = () => {

    return (
        <React.Fragment>
            <h1>Zamestnanec</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <label htmlFor="firstName">Meno</label>
                    <Field id="firstName" name="firstName" placeholder="Ján" />

                    <label htmlFor="lastName">Priezvisko</label>
                    <Field id="lastName" name="lastName" placeholder="novák" />

                    <label htmlFor="workPhone">Pracovný telefón </label>
                    <Field id="workPhone" name="workPhone" placeholder="0911222502" />

                    <label htmlFor="personalPhone">Súkromný telefón </label>
                    <Field id="personalPhone" name="personalPhone" placeholder="0911585965" />

                    <label htmlFor="workEmail">Pracovný email</label>
                    <Field
                        id="workEmail"
                        name="workEmail"
                        placeholder="jannovak@utb.cz"
                        type="email"
                    />

                    <label htmlFor="personalEmail">Súkromný email</label>
                    <Field
                        id="personalEmail"
                        name="personalEmail"
                        placeholder="jannovak@acme.com"
                        type="email"
                    />

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