const router  =  require('express').Router();
const User = require("../controller/userController.js");
const Author = require("../controller/authorController");
const Book = require("../controller/bookController");

router.post("/", User.create);
router.get("/", User.getUsers);
router.get("/user", User.getUser);
router.put("/update", User.updateUser);
router.delete("/delete", User.deleteUser);
//Author
router.post("/authors", Author.createAuthor);
router.get("/authors", Author.getAuthors);
router.get("/single-author", Author.getAuthor);
router.put("/update-author", Author.updateAuthor);
router.delete("/delete-author", Author.deleteAuthor);

//book
router.post("/books", Book.createBook);
router.get("/books", Book.getBooks);
router.get("/single-books", Book.getBook);
router.get("/author-books", Book.getAuthorBooks);
router.put("/update-books", Book.updateBook);
router.delete("/delete-books", Book.deleteBook);

module.exports = router;