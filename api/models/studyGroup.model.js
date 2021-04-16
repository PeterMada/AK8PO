const sql = require("./db.js");

const Subject = function (subject) {
    this.code = subject.code;
    this.subjectName = subject.subjectName;
    this.tutor = subject.tutor;
    this.numberOfWeeks = subject.numberOfWeeks;
    this.numberOfHoursLecture = subject.numberOfHoursLecture;
    this.numberOfHoursSeminar = subject.numberOfHoursSeminar;
    this.numberOfHoursExercise = subject.numberOfHoursExercise;
    this.language = subject.language;
    this.studyForm = subject.studyForm;
    this.typeOfStudy = subject.typeOfStudy;
    this.year = subject.year;
    this.semester = subject.semester;
    this.terminationMethod = subject.terminationMethod;
    this.numberOfCredits = subject.numberOfCredits;
    this.groupSize = subject.groupSize;
    this.department = subject.department;
};

Subject.create = (newSubject, result) => {
    sql.query("INSERT INTO Subject SET ?", newSubject, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created subject: ", { id: res.insertId, ...newSubject });
        result(null, { id: res.insertId, ...newSubject });
    });
};

Subject.getAll = result => {
    sql.query("SELECT * FROM Subject", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("subjects: ", res);
        result(null, res);
    });
};

module.exports = Subject;