import React from 'react';

import Person from '../../components/Person';

const EmployeeListPage = ({ employees }) => {

    return (
        <>
            {employees?.map(employee => (
                <Person key={employee.id} person={employee} />
            ))}
        </>
    )
};

export default EmployeeListPage;