import React, { useState, useEffect } from 'react';

import WithListLoading from '../../components/WithListLoading';
import StudyGroupListPage from './StudyGroupListPage';

const StudyGroupListLoader = () => {
    const ListLoading = WithListLoading(StudyGroupListPage);

    const [appState, setAppState] = useState({
        loading: false,
        studyGroups: null,
        subjects: null
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://localhost:8000/studyGroup`;
        const apiSubjectUrl = `http://localhost:8000/subject`;
        let studyGroup = null;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((studyGroups) => {
                studyGroup = studyGroups;
            }).then(() => {
                fetch(apiSubjectUrl)
                    .then((res) => res.json())
                    .then((subjects) => {
                        setAppState({
                            loading: false,
                            subjects: subjects,
                            studyGroups: studyGroup
                        });
                    });
            })

    }, [setAppState]);

    return (
        <>
            <ListLoading
                isLoading={appState.loading}
                studyGroups={appState.studyGroups}
                subjects={appState.subjects} />
        </>
    );
}

export default StudyGroupListLoader;