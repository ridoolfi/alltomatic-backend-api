const userModel = require('../models/userModel')

const getUsers = (async (req,res) => {
    const AllUsers =  await userModel.getUser()
    return res.status(200).json(AllUsers) })


const createUser = async (req, res) => {
    const createdUser = await userModel.createUser(req.body)
    return res.status(201).json(createdUser)
};



const deleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const deleted = await userModel.deleteUser( id )
    return res.status(204).json(deleted)
};



const updateUser = async (req, res) => {
    const body = req.body
    const updated = await userModel.updateUser(body.id, body.column, body.newData)
    return res.status(204).json(updated)
};

  

module.exports = {
    getUsers:getUsers,
    createUser:createUser,
    deleteUser:deleteUser,
    updateUser: updateUser
}