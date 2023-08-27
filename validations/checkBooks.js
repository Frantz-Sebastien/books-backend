const checkName = (req, res, next) => {
    if(req.body.book){
        next();
    } else {
        res.status(400).json({ error: "Book is needed" })
    }
};

const checkRead = (req, res, next) => {
    const { has_read } = req.body;
    if(
        has_read == true ||
        has_read == false ||
        has_read == undefined
    ) {
        next();
    } else {
        res.status(400).json({ error: "has_read must be a boolean" });
    }
};

const checkFavorite = (req, res, next) =>{
    const { favorite } = req.body;
    if(
        favorite == true ||
        favorite == false ||
        favorite == undefined
    ) {
        next();
    } else {
        res.status(400).json({ error: "favorite must be a boolean"})
    }
};

const checkURL = (req, res, next) => {
    if(
        req.body.image.substring(0, 7) === "http://" ||
        req.body.image.substring(0, 8) === "https://"
    ) {
        return next();
    } else {
    res.status(400).json({ error: "You forgot to start your url with http:// or https://"})
    }
};

module.exports = { checkName, checkFavorite, checkRead, checkURL }