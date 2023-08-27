const express = require("express");
const { getBook } = require("../queries/books.js");
const reviews = express.Router({ mergeParams:true });

const {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview,
} = require("../queries/reviews")

//INDEX
reviews.get("/", async (req, res) =>{
    const { bookId } = req.params;
    try {
        const allReviews = await getAllReviews(bookId);
        res.json(allReviews);
    } catch (error) {
        res.json(error)
    }
})

//SHOW
reviews.get("/:id", async (req, res) =>{
    const { id } = req.params;
    const review = await getReview(id);
    if (review){
        res.json(review);
    } else {
        res.status(404).json({ error: "Unfound" })
    }
})

//UPDATE
reviews.put("/:id", async(req, res) =>{
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    if (updatedReview.id){
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json("Unfound review")
    }
})

//CREATE
reviews.post("/", async (req, res) => {
    const review = await newReview(req.body);
    res.status(200).json(review);
});

//DELETE
reviews.delete("/:id", async (req, res) =>{
    const { id } = req.params;

    const deletedReview = await deleteReview(id);
    if (deletedReview.id){
        res.status(200).json(deletedReview);
    } else {
        res.status(404).json({ error: "review not found" })
    }
})

module.exports = reviews;