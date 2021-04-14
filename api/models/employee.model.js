const sql = require("./db.js");

// constructor
const Employee = function (employee) {
    this.firstName = employee.firstName;
};

Employee.create = (newEmployee, result) => {
    sql.query("INSERT INTO Employee SET ?", newEmployee, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created employee: ", { id: res.insertId, ...newEmployee });
        result(null, { id: res.insertId, ...newEmployee });
    });
};

Employee.findById = (employeeId, result) => {
    sql.query(`SELECT * FROM Employee WHERE id = ${employeeId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found employee: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Employee with the id
        result({ kind: "not_found" }, null);
    });
};

Employee.getAll = result => {
    sql.query("SELECT * FROM Employee", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("employees: ", res);
        result(null, res);
    });
};

/*
Employee.updateById = (id, employee, result) => {
    sql.query(
        "UPDATE Employee SET name = ?, active = ? WHERE id = ?",
        [employee.email, employee.name, employee.active, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found employee with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated employee: ", { id: id, ...employee });
            result(null, { id: id, ...employee });
        }
    );
};


Employee.remove = (id, result) => {
    sql.query("DELETE FROM Employee WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Employee with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Employee with id: ", id);
        result(null, res);
    });
};

Employee.removeAll = result => {
    sql.query("DELETE FROM Employee", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} Employees`);
        result(null, res);
    });
};
*/

module.exports = Employee;