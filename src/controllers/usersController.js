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
    await userModel.deleteUser( id )
    return res.status(204).json()
};



const updateUser = async (req, res) => {
    const body = req.body
    const updated = await userModel.updateUser(body.id, body.column, body.newData)
    return res.status(204).json(updated)
};

const authUser = async(req, res) => {
    const user = req.body
    const exist = await userModel.authUser(user)
    if(exist.length === 0){
        return res.status(402).json({msg:"User not found!"})
    }else{
        return res.status(200).json(exist)}
};

module.exports = {
    getUsers:getUsers,
    createUser:createUser,
    deleteUser:deleteUser,
    updateUser: updateUser,
    authUser: authUser
}