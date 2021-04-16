module.exports = app => {
    const studyGroup = require("../controllers/studyGroup.controllers");

    app.post("/studyGroup", studyGroup.create);

    app.get("/studyGroup", studyGroup.findAll);
};