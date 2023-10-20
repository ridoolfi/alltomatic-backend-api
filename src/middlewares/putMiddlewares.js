

const validatePut = (req,res,next) => {
    const query = req.body
    const column = req.body.column

    
    switch(query.id){
        case undefined: {
            return res.status(400).json({
                Error: "The field id is required."
            })
        }
        case '':{
            return res.status(400).json({
                Error: "The field id cannot be null."
            })
        }

    }
    switch(column){
            case undefined: {
                return res.status(400).json({
                    Error: "The field column is required"
                })
            }
            case '': {
                return res.status(400).json({
                    Error: "The field column cannot be null"
                })
            }
        }
    switch(query.newData){
            case undefined: {
                return res.status(400).json({
                    Error: "The field newData is required"
                })
            }
            case '': {
                return res.status(400).json({
                    Error: "The field newData cannot be null"
                })
            }
        }

next()



}



module.exports = {
    validatePut: validatePut
}