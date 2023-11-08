const dataModel = require('../models/dataModel')


const getUmi = async (req, res) => {
    const umi = await dataModel.getUmidade()
    return res.status(200).json(umi)
};

const getLumi = async (req, res) => {
    const lumi = await dataModel.getLuminosidade()
    return res.status(200).json(lumi)
};

const getTemp = async (req, res) => {
    const temp = await dataModel.getTemperatura()
    return res.status(200).json(temp)
};

const selectUmidade = async(req, res) => {
    let data = req.body
    const umi = await dataModel.selectUmidade(data.id)
    return res.status(200).json(umi)
};

const selectLuminosidade = async(req, res) => {
    let data = req.body
    const umi = await dataModel.selectLuminosidade(data.id)
    return res.status(200).json(umi)
};

const selectTemperatura = async(req, res) => {
    let data = req.body
    const umi = await dataModel.selectTemperatura(data.id)
    return res.status(200).json(umi)
};

const TempByDay = async(req, res) => {
    let day = req.body;
    try {
        const date = await dataModel.TempByDay(day.date);
        return res.status(200).json(date)
    }catch(err){
        return res.status(400).json(err.message)
    }
    };

const LumiByDay = async(req, res) => {
    let day = req.body;
    try {
        const date = await dataModel.LumiByDay(day.date);
        return res.status(200).json(date)
    }catch(err){
        return res.status(400).json(err.message)
    }
};

const UmiByDay = async(req, res) => {
    let day = req.body;
    try {
        const date = await dataModel.UmiByDay(day.date);
        return res.status(200).json(date)
    }catch(err){
        return res.status(400).json(err.message)
    }
};



module.exports = {
    getUmidade: getUmi,
    getLuminosidade: getLumi,
    getTemperatura: getTemp,
    selectUmidade: selectUmidade,
    selectLuminosidade: selectLuminosidade,
    selectTemperatura: selectTemperatura,
    TempByDay: TempByDay,
    LumiByDay: LumiByDay,
    UmiByDay: UmiByDay,
};

