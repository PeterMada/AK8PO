import React from 'react';

const SubjectListPage = ({ subjects }) => {

    return (
        <>
            {subjects?.map(subject => (
                <div key={subject.code}>
                    <h2>{subject.code}</h2>
                    <div><span>Názov:</span> {subject.subjectName}</div>
                    <div><span>Garant:</span> {subject.tutor}</div>
                    <div><span>Počet týždňov:</span> {subject.numberOfWeeks}</div>
                    <div><span>Počet hodín prednášok:</span> {subject.numberOfHoursLecture}</div>
                    <div><span>Počet hodín seminárov:</span> {subject.numberOfHoursSeminar}</div>
                    <div><span>Počet hodín cvičení:</span> {subject.numberOfHoursExercise}</div>
                    <div><span>Jazyk:</span> {subject.language}</div>
                    <div><span>Forma štúdia:</span> {subject.studyForm}</div>
                    <div><span>Typ studia:</span> {subject.typeOfStudy}</div>
                    <div><span>Ročník:</span> {subject.year}</div>
                    <div><span>Semester:</span> {subject.semester}</div>
                    <div><span>Spôsob zakončenia:</span> {subject.terminationMethod}</div>
                    <div><span>Počet kreditov:</span> {subject.numberOfCredits}</div>
                    <div><span>Veľkosť skupiny:</span> {subject.groupSize}</div>
                    <div><span>Ústav:</span> {subject.department}</div>

                </div>
            ))}
        </>
    )
};

export default SubjectListPage;