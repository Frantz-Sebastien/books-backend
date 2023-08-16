const express = require("express");
const { getBook } = require("../queries/books.js");
const comments = express.Router({ mergeParams:true });
const {
    getAllComments,
    getComment,
    newComment,
    deleteComment,
    updateComment,
} = require("../queries/comments.js")

//INDEX
books.get("/", async (req, res) =>{
    const { bookId } = req.params;
    try {
        const allComments = await getAllComments(bookId);
        res.json(allComments);
    } catch (error) {
        res.json(error)
    }
})

//SHOW
books.get("/:id", async (req, res) =>{
    const { id } = req.params;
    const comment = await getComment(id);
    if (comment){
        res.json(comment);
    } else {
        res.status(404).json({ error: "Unfound" })
    }
})

//UPDATE
books.put("/:id", async(req, res) =>{
    const { id } = req.params;
    const updatedComment = await updateComment(id, req.body);
    if (updatedComment.id){
        res.status(200).json(updatedComment)
    } else {
        res.status(404).json("Unfound comment")
    }
})

//CREATE
books.post("/", async (req, res) => {
    const comment = await newComment(req.body);
    res.status(200).json(comment);
});

//DELETE
books.delete("/:id", async (req, res) =>{
    const { id } = req.params;

    const deletedComment = await deleteComment(id);
    if (deletedComment.id){
        res.status(200).json(deletedComment);
    } else {
        res.status(404).json({ error: "Comment not found" })
    }
})

module.exports = comments;