const connection = require('./connection')


const getUser = async () => { // Função que obtem os usuários do banco de dados
    const [users] = await connection.execute('SELECT * FROM users') 
    return users
}

const createUser = async (user) => { // Função que cria os usuários
    const insert = `INSERT INTO users(username, password, nome, sobrenome, dataNascimento, enderecoCep, enderecoLogradouro, enderecoBairro, enderecoNum, enderecoComplemento, cpf, criadoEm)`;
    const values = ` VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const dateUTC = new Date(Date.now()).toUTCString()
    const newU = user;
    //console.log([newU.nome, newU.sobrenome, newU.dataNascimento, newU.enderecoCep, newU.enderecoLogradouro, newU.enderecoBairro, newU.enderecoNum, newU.enderecoComplemento, newU.cpf, dateUTC])

    const [createdUser] = await connection.execute(insert + values, [newU.username, newU.password, newU.nome, newU.sobrenome, newU.dataNascimento, newU.enderecoCep, newU.enderecoLogradouro, newU.enderecoBairro, newU.enderecoNum, newU.enderecoComplemento, newU.cpf, dateUTC])
    return {insertedId: createdUser.insertId};
};


const deleteUser = async (id) => {
    const removedUser = await connection.execute('DELETE FROM users WHERE id = ?', [id])
    return removedUser;
};

const updateUser = async (id, column, data) => {
    let query = `UPDATE users SET ${column} = ${data} WHERE id = ${id}`
    if(typeof data == 'string'){
        query = `UPDATE users SET ${column} = '${data}' WHERE id = ${id}`
    };
    
    const updatedUser = await connection.execute(query)
    return updatedUser;
};


const authUser = async(user) => {
    let query = `select id, username, password, nome, sobrenome, dataNascimento, enderecoCep, enderecoLogradouro, enderecoBairro, enderecoNum, enderecoComplemento, cpf, criadoEm from users where username = "${user.username}" && password = "${user.password}";`
    const searchUser = await connection.query(query)
    return searchUser[0]
};

module.exports = {
    getUser: getUser,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    authUser: authUser
};

