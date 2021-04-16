import React from 'react';

const StudyGroupListPage = ({ studyGroups }) => {

    return (
        <>
            {studyGroups?.map(studyGroup => (
                <div key={studyGroup.code}>
                    <h2>{studyGroup.code}</h2>
                    <div><span>Názov:</span> {studyGroup.name}</div>
                    <div><span>Forma štúdia:</span> {studyGroup.studyForm}</div>
                    <div><span>Typ studia:</span> {studyGroup.typeOfStudy}</div>
                    <div><span>Jazyk:</span> {studyGroup.language}</div>
                    <div><span>Ročník:</span> {studyGroup.year}</div>
                    <div><span>Semester:</span> {studyGroup.semester}</div>
                    <div><span>Garant:</span> {studyGroup.numberOfStudents}</div>
                </div>
            ))}
        </>
    )
};

export default StudyGroupListPage;