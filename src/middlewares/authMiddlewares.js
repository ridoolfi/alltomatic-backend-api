const loginMiddleware = async (req,res,next) => {
    const loginUser = req.body
    if(!loginUser.username){
        return res.status(402).json({msg: "The field username is obrigatory"})
    }if(!loginUser.password){
        return res.status(402).json({msg: "The field password is obrigatory"})
    }
    next()
}

module.exports = loginMiddleware