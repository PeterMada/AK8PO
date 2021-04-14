const Employee = require("../models/employee.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Employee
    const employee = new Employee({
        ...req.body
    });

    // Save Employee in the database
    Employee.create(employee, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    console.log(req.params);
    Employee.findById(req.params.employeeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Employee with id ${req.params.employeeId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Employee with id " + req.params.employeeId
                });
            }
        } else res.send(data);
    });
};

/*
exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
*/