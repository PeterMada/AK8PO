import React from 'react';

import AddToSubject from '../../components/AddToSubject';

const StudyGroupListPage = ({ studyGroups, subjects }) => {

    return (
        <>
            {studyGroups?.map(studyGroup => {
                return (
                    <div key={studyGroup.id}>
                        <h2>{studyGroup.code}</h2>
                        <div><span>Názov:</span> {studyGroup.name}</div>
                        <div><span>Forma štúdia:</span> {studyGroup.studyForm}</div>
                        <div><span>Typ studia:</span> {studyGroup.typeOfStudy}</div>
                        <div><span>Jazyk:</span> {studyGroup.language}</div>
                        <div><span>Ročník:</span> {studyGroup.year}</div>
                        <div><span>Semester:</span> {studyGroup.semester}</div>
                        <div><span>Počet študentov v skupine:</span> {studyGroup.numberOfStudents}</div>
                        {studyGroup.subject &&
                            <div><span>Predmet: </span>{studyGroup.subject}</div>
                        }
                        {!studyGroup.subject &&
                            <AddToSubject subjects={subjects} />
                        }

                    </div>
                )
            })}
        </>
    )
};

export default StudyGroupListPage;