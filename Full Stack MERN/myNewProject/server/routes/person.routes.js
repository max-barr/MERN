const PersonController = require("../controllers/person.controller");

module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.get("/api/people/:id", PersonController.getOnePerson);
    app.put("/api/people/:id", PersonController.updatePerson);
    app.post("/api/people", PersonController.createPerson);
    app.get("/api/people", PersonController.findAllPeople);
    app.delete("/api/people/:id", PersonController.deletePerson);
}