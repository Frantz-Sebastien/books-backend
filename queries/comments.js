const db = require("../db/dbConfig.js")

const getAllComments = async (book_id) => {
    try {
        const allComments = await db.any(
            "SELECT * FROM comments WHERE book_id=$1",
            book_id
        )
        return allComments
    } catch (error){
        return error
    }
}

const getComment = async (id) =>{
    try{
        const oneComment = await db.one("SELECT * FROM comments WHERE id=$1", id)
        return oneComment
    } catch (error){
        return error;
    }
}

const newComment = async (comment) =>{
    try{
        const newComment = await db.one(
            "INSERT INTO comments (commenter, rating, content, book_id) VALUES($1, $2, $3, $4) RETURNING *",
            [
                comment.commenter,
                comment.rating,
                comment.content,
                comment.book_id
            ]
        )
        return newComment;
    } catch (error){
        return error;
    }
}

const deleteComment = async (id) =>{
    try{
        const deletedComment = await db.one(
            "DELETE FROM comments WHERE id = $1 RETURNING *",
            id
        )
        return deletedComment;
    } catch (error){
        return error;
    }
}

const updateComment = async (id) =>{
    try{
        const deletedComment = await db.one(
            "UPDATE comments SET commenter=$1, rating=$2, content=$3, book_id=$4 WHERE id=$5 RETURNING *",
            [
                comment.commenter,
                comment.rating,
                comment.content,
                comment.book_id,
                id
            ]
        )
        return updatedComment;
    } catch(error){
        return comment;
    }
}

module.exports = {
    getAllComments,
    getComment,
    newComment,
    deleteComment,
    updateComment,
}