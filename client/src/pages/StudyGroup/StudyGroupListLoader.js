import React, { useState, useEffect } from 'react';

import WithListLoading from '../../components/WithListLoading';
import StudyGroupListPage from './StudyGroupListPage';

const StudyGroupListLoader = () => {
    const ListLoading = WithListLoading(StudyGroupListPage);

    const [appState, setAppState] = useState({
        loading: false,
        studyGroups: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://localhost:8000/studyGroup`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((studyGroups) => {
                setAppState({ loading: false, studyGroups: studyGroups });
            });
    }, [setAppState]);

    return (
        <>
            <ListLoading isLoading={appState.loading} studyGroups={appState.studyGroups} />
        </>
    );
}

export default StudyGroupListLoader;