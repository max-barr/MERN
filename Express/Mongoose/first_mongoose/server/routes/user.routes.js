const UserController = require("../controllers/user.controller");
const User = require("../models/user.model");

module.exports = app => {
    app.get("/api/users", UserController.findAllUsers);
    app.get("/api/users/:id", UserController.findOneSingleUser);
    app.put("/api/users/:id", UserController.updateExistingUser);
    app.post("/api/users", UserController.createNewUser);
    app.delete("/api/users/:id", UserController.deleteExistingUser);
}