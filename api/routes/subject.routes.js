module.exports = app => {
    const subject = require("../controllers/subject.controllers");

    app.post("/subject", subject.create);

    app.get("/subject", subject.findAll);
};