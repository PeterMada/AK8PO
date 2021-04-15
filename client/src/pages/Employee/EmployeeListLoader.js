import React, { useState, useEffect } from 'react';

import WithListLoading from '../../components/WithListLoading';
import EmployeeListPage from './EmployeeListPage';


const EmployeeListLoader = () => {
    const ListLoading = WithListLoading(EmployeeListPage);

    const [appState, setAppState] = useState({
        loading: false,
        employees: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://localhost:8000/employee`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((employees) => {
                setAppState({ loading: false, employees: employees });
            });
    }, [setAppState]);

    return (
        <>
            <ListLoading isLoading={appState.loading} employees={appState.employees} />
        </>
    );
}

export default EmployeeListLoader;