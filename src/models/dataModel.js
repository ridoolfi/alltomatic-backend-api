const connection = require('./connection')
// Get All Datas From Sensors
const getUmi = async () => {
    const [umiValue ]= await connection.execute('SELECT * FROM dataUmidade;')
    return umiValue
};

const getTemp = async () => {
    const [tempValue ]= await connection.execute('SELECT * FROM dataTemperatura')
    return tempValue
};

const getLumi = async () => {
    const [lumiValue]= await connection.execute('SELECT * FROM dataLuminosidade;')
    return lumiValue
};


// get specific data where date is the primary key
const selectUmidade = async (dateId) => {
    const [dataValue] = await connection.execute(`SELECT * FROM dataUmidade where dateHourData = "${dateId}";`)
    return dataValue
}

const selectLuminosidade = async (dateId) => {
    const [dataValue] = await connection.execute(`SELECT * FROM dataLuminosidade where dateHourData = "${dateId}";`)
    return dataValue
}

const selectTemperatura = async (dateId) => {
    const [dataValue] = await connection.execute(`SELECT * FROM dataTemperatura where dateHourData = "${dateId}";`)
    return dataValue
}

const TempByDay = async (day) => {
    const [dayDatas] = await connection.execute(`SELECT * FROM dataTemperatura where LEFT(dataTemperatura.dateHourData, 10) = "${day}";`)
    return dayDatas
}

const LumiByDay = async (day) => {
    const [dayDatas] = await connection.execute(`SELECT * FROM dataLuminosidade where LEFT(dataLuminosidade.dateHourData, 10) = "${day}";`)
    return dayDatas
}

const UmiByDay = async (day) => {
    const [dayDatas] = await connection.execute(`SELECT * FROM dataUmidade where LEFT(dataUmidade.dateHourData, 10) = "${day}";`)
    return dayDatas
}

const allByDay = async (day) => {

}



module.exports = {
    getUmidade: getUmi,
    getTemperatura: getTemp,
    getLuminosidade: getLumi,
    selectUmidade: selectUmidade,
    selectLuminosidade: selectLuminosidade,
    selectTemperatura: selectTemperatura,
    TempByDay: TempByDay,
    LumiByDay: LumiByDay,
    UmiByDay: UmiByDay
};
