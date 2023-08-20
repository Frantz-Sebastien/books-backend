const express = require("express");
const books = express.Router();
const reviewsController = require("./reviewsController.js");
books.use("/:bookId/reviews", reviewsController);

const {
    getAllBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook,
} = require("../queries/books")

const { checkName, checkFavorite, checkRead, checkURL } = require("../validations/checkBooks.js")

//INDEX
books.get("/", async (req, res) => {
    const allBooks = await getAllBooks();
    if(allBooks[0]){
        res.status(200).json(allBooks);
    } else {
        res.status(500).json({ error: "Server Error" })
    }
});

//SHOW
books.get("/:id", async (req, res) => {
    const { id } = req.params;
    const book = await getBook(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: "Unfound Book"})
    }
});

//CREATE
books.post("/", checkName, checkFavorite, checkRead, checkURL, async (req, res) =>{
    try{
        const book = await createBook(req.body);
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

//DELETE
books.delete("/:id", async (req, res) =>{
    const { id } = req.params;
    const deletedBook = await deleteBook(id);
    if (deletedBook.id) {
        res.status(200).json(deletedBook)
    } else {
        res.status(404).json("Book unfound")
    }
})

//UPDATE
books.put("/:id", checkName, checkFavorite, checkRead, checkURL, async (req, res) => {
    const { id } = req.params;
    const updatedBook = await updateBook(id, req.body)
    res.status(200).json(updatedBook)
})

module.exports = books;