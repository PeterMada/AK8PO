const StudyGroup = require("../models/studyGroup.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const studyGroup = new StudyGroup({
        ...req.body
    });

    StudyGroup.create(studyGroup, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the study group."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    StudyGroup.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving study group."
            });
        else res.send(data);
    });
};