const validateDelete = (req, res, next) => {
    const idDelete = Number(req.params.id)
    if (typeof idDelete === "string"){
        return res.status(400).json({
            Error: "The parameter id cannot be a string"
        })
    }
    next()
}



module.exports = {
    validateDelete: validateDelete
}