const dataModel = require('../models/dataModel')
const Datas = require('../models/dataModel').Datas

const getUmi = async (req, res) => {
    const umi = await Datas.getUmi()
    return res.status(200).json(umi)
};

const getLumi = async (req, res) => {
    const lumi = await Datas.getLumi()
    return res.status(200).json(lumi)
};

const getTemp = async (req, res) => {
    const temp = await Datas.getTemp()
    return res.status(200).json(temp)
};

const selectUmidade = async(req, res) => {
    let data = req.body
    const umi = await Datas.selectUmidade(data.id)
    return res.status(200).json(umi)
};

const selectLuminosidade = async(req, res) => {
    let data = req.body
    const umi = await Datas.selectLuminosidade(data.id)
    return res.status(200).json(umi)
};

const selectTemperatura = async(req, res) => {
    let data = req.body
    const umi = await Datas.selectTemperatura(data.id)
    return res.status(200).json(umi)
};

const TempByDay = async(req, res) => {
    let day = req.body;
    try {
        const date = await Datas.TempByDay(day.date);
        return res.status(200).json(date)
    }catch(err){
        return res.status(400).json(err.message)
    }
    };

const LumiByDay = async(req, res) => {
    let day = req.body;
    try {
        const date = await Datas.LumiByDay(day.date);
        return res.status(200).json(date)
    }catch(err){
        return res.status(400).json(err.message)
    }
};

const UmiByDay = async(req, res) => {
    let day = req.body;
    try {
        const date = await Datas.UmiByDay(day.date);
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

