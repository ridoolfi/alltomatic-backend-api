const validatePost = (req, res, next) => {
    const {body} = req;
    
    const nasc = body.dataNascimento;
    const cep = body.enderecoCep
    const num = body.enderecoNum
    const cpf = body.cpf
    

    // Username
    switch (body.username)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "username" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "username" cannot be null'
            })
        }

        
    }




    // Password
    switch (body.password)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "password" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "password" cannot be null'
            })
        }

    }


    // Nome
    switch (body.nome)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "nome" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "nome" cannot be null'
            })
        }

        
    }

    // Sobrenome
    switch (body.sobrenome)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "sobrenome" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "sobrenome" cannot be null'
            })
        }
        
        
    }

    // Data de nascimento
    switch (body.dataNascimento)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "dataNascimento" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "dataNascimento" cannot be null'
            })
        } 
    }
    if(nasc.length > 10){
        return res.status(400).json(
            {
                Error: 'The field "dataNascimento" is out of Syntax.' 
            }
        )
        
    }



    // Cep
    switch (body.enderecoCep)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "enderecoCep" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "enderecoCep" cannot be null'
            })
        } 
    }
    if(cep.length > 8){
        return res.status(400).json(
            {
                Error: 'The field "enderecoCep" is bigger than required.' 
            }
        )
        
    }

    // Logradouro
    switch (body.enderecoLogradouro)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "enderecoLogradouro" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "enderecoLogradouro" cannot be null'
            })
        } 
    }



    //Bairro
    switch (body.enderecoBairro)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "enderecoBairro" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "enderecoBairro" cannot be null'
            })
        } 
    }

    // Numero
    switch (body.enderecoNum)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "enderecoNum" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "enderecoNum" cannot be null'
            })
        } 
    }
    if (typeof num !== "number"){
        return res.status(400).json({
            Error: 'The field "enderecoNum" type required is a "Number"'
        })
    }


    // Complemento
    switch (body.enderecoComplemento)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "enderecoComplemento" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "enderecoComplemento" cannot be null'
            })
        } 
    }

    // CPF
    switch (body.cpf)
    {
        case undefined:{
            return res.status(400).json({
            Error: 'The field "cpf" is required'
            
        })}
        case '': {
            return res.status(400).json({
                Error: 'The field "cpf" cannot be null'
            })
        } 
    }
    if(cpf.length > 11){
        return res.status(400).json(
            {
                Error: 'The field "cpf" is bigger than required.' 
            }
        )
    }
    next()
}


module.exports = {
    validatePost: validatePost
}