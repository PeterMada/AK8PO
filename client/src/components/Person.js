import React from 'react';

const Person = ({ person }) => {
    return (
        <div>
            <h2>{person.firstName} {person.lastName}</h2>
            <div><span>Pracovný telefón:</span> {person.workPhone}</div>
            <div><span>Súkromný telefón:</span> {person.personalPhone}</div>
            <div><span>Pracovný email:</span> {person.workEmail}</div>
            <div><span>Súkromný email:</span> {person.personalEmail}</div>
            <div><span>Doktorand:</span> {person.phDStudent ? 'Ano' : 'Ne'}</div>
            <div><span>Percento úväzku:</span> {person.percentageOfWorkload}</div>
            <div><span>Pracovné body CZ:</span> {person.workingPointsCZ}</div>
            <div><span>Pracovné body AJ:</span> {person.workingPointsEN}</div>
        </div>
    )
}

export default Person;