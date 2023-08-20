const express = require("express");
const { getBook } = require("../queries/books.js");
const reviews = express.Router({ mergeParams:true });
const {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview,
} = require("../queries/reviews.js")

//INDEX
books.get("/", async (req, res) =>{
    const { bookId } = req.params;
    try {
        const allReviews = await getAllReviews(bookId);
        res.json(allReviews);
    } catch (error) {
        res.json(error)
    }
})

//SHOW
books.get("/:id", async (req, res) =>{
    const { id } = req.params;
    const review = await getReview(id);
    if (review){
        res.json(review);
    } else {
        res.status(404).json({ error: "Unfound" })
    }
})

//UPDATE
books.put("/:id", async(req, res) =>{
    const { id } = req.params;
    const updatedreview = await updateReview(id, req.body);
    if (updatedreview.id){
        res.status(200).json(updatedreview)
    } else {
        res.status(404).json("Unfound review")
    }
})

//CREATE
books.post("/", async (req, res) => {
    const review = await newReview(req.body);
    res.status(200).json(review);
});

//DELETE
books.delete("/:id", async (req, res) =>{
    const { id } = req.params;

    const deletedreview = await deleteReview(id);
    if (deletedreview.id){
        res.status(200).json(deletedreview);
    } else {
        res.status(404).json({ error: "review not found" })
    }
})

module.exports = Reviews;