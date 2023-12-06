const Author = require("../models/author.model")

// CREATE
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ALL
module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => {
            console.log(authors);
            res.json(authors)
        })
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ONE
module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "Something went wrong", error:err}));
    }

// UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}