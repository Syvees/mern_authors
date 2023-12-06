const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/authors", AuthorController.getAllAuthors); // GET ALL
    app.get("/api/authors/:id", AuthorController.getAuthor); // GET ONE
    app.post("/api/authors", AuthorController.createAuthor); // CREATE
    app.patch("/api/authors/:id", AuthorController.updateAuthor); // UPDATE
    app.delete("/api/authors/:id", AuthorController.deleteAuthor); // DELETE
} 