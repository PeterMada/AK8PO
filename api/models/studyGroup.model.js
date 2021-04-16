const sql = require("./db.js");

const StudyGroup = function (studyGroup) {
    this.code = studyGroup.code;
    this.name = studyGroup.name;
    this.studyForm = studyGroup.studyForm;
    this.typeOfStudy = studyGroup.typeOfStudy;
    this.language = studyGroup.language;
    this.year = studyGroup.year;
    this.semester = studyGroup.semester;
    this.numberOfStudents = studyGroup.numberOfStudents;
};

StudyGroup.create = (newStudyGroup, result) => {
    sql.query("INSERT INTO StudyGroup SET ?", newStudyGroup, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created StudyGroup: ", { id: res.insertId, ...newStudyGroup });
        result(null, { id: res.insertId, ...newStudyGroup });
    });
};

StudyGroup.getAll = result => {
    sql.query("SELECT * FROM StudyGroup", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("StudyGroups: ", res);
        result(null, res);
    });
};

module.exports = StudyGroup;