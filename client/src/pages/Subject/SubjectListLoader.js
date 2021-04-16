import React, { useState, useEffect } from 'react';

import WithListLoading from '../../components/WithListLoading';
import SubjectListPage from './SubjectListPage';


const SubjectListLoader = () => {
    const ListLoading = WithListLoading(SubjectListPage);

    const [appState, setAppState] = useState({
        loading: false,
        subjects: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://localhost:8000/subject`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((subjects) => {
                setAppState({ loading: false, subjects: subjects });
            });
    }, [setAppState]);

    return (
        <>
            <ListLoading isLoading={appState.loading} subjects={appState.subjects} />
        </>
    );
}

export default SubjectListLoader;