const Subject = require("../models/subject.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const subject = new Subject({
        ...req.body
    });

    Subject.create(subject, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Subject."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Subject.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Subjects."
            });
        else res.send(data);
    });
};
