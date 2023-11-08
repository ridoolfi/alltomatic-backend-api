const dataMiddleware = async(req, res, next) => {
    const dados = req.body;
    if(dados.date == undefined){
        return res.status(400).json(
            {
                "Error": "The field can't be 'undefined'."
            }
        );
    }else if(dados.date == ''){
        return res.status(400).json(
            {
                "Error": "The field can't be 'null'."
            }
        );
    }else if(dados.date.length < 10){
        return res.status(400).json(
            {
                "Error": "The field is not complete, please complete it and try again."
            }
        );
    };
    next();
};

module.exports = dataMiddleware;