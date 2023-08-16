const db = require("../db/dbConfig")

//SHOW All the Books
const getAllBooks = async () =>{
    try{
        const allBooks = await db.any("SELECT * FROM books")
        return allBooks;
    } catch (error){
        return error;
    }
}

//SHOW ONE Book
const getBook = async (id) =>{
    try{
        const oneBook = await db.one("SELECT * FROM books WHERE id = $1",id)
        return oneBook
    } catch (error){
        return error;
    }
}

//CREATE a Book
const createBook = async (book) =>{
    try{
        const newBook = await db.one(
            "INSERT INTO books (book, author, image, genre, release_year, has_read, pages, favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [
                book.book, 
                book.author, 
                book.image, 
                book.genre, 
                book.release_year, 
                book.has_read, 
                book.pages, 
                book.favorite
            ]
        )
        return newBook;
    } catch (error){
        return error;
    }
}

//DELETE a Book
const deleteBook = async (id) =>{
    try{
        const deleteBook = await db.one(
            "DELETE FROM books WHERE id = $1 RETURNING *",
            id
        )
        return deleteBook;
    } catch(error){
        return error;
    }
}

//UPDATE a Book
const updateBook = async (id, book) =>{
    try{
        const updatedBook = await db.one(
            "UPDATE books SET book=$1, author=$2, image=$3, genre=$4, release_year=$5, has_read=$6, pages=$7, favorite=$8 WHERE id=$9 RETURNING *",
            [   book.book, 
                book.author, 
                book.image, 
                book.genre, 
                book.release_year, 
                book.has_read, 
                book.pages, 
                book.pages, 
                book.favorite, id
            ]
        )
        return updatedBook;
    } catch (book){
        return error;
    }
}

module.exports = {
    getAllBooks,
    createBook,
    getBook,
    deleteBook,
    updateBook
};