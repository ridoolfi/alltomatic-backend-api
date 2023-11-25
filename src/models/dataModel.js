const connection = require('./connection')
// Get All Datas From Sensors

class Datas{
    static async getUmi(){
        const [umiValue] = await connection.execute('SELECT * FROM dataUmidade;')
        return umiValue
    }


    static async getTemp(){
        const [tempValue ]= await connection.execute('SELECT * FROM dataTemperatura')
        return tempValue
    };

    static async getLumi(){
    const [lumiValue]= await connection.execute('SELECT * FROM dataLuminosidade;')
    return lumiValue
    };


// get specific data where date is the primary key
    static async selectUmidade(dateId){
    const [dataValue] = await connection.execute(`SELECT * FROM dataUmidade where dateHourData = "${dateId}";`)
    return dataValue
    }

    static async selectLuminosidade (dateId){
    const [dataValue] = await connection.execute(`SELECT * FROM dataLuminosidade where dateHourData = "${dateId}";`)
    return dataValue
    }

    static async selectTemperatura (dateId){
        const [dataValue] = await connection.execute(`SELECT * FROM dataTemperatura where dateHourData = "${dateId}";`)
        return dataValue
        }

    static async TempByDay(day){
        const [dayDatas] = await connection.execute(`SELECT * FROM dataTemperatura where LEFT(dataTemperatura.dateHourData, 10) = "${day}";`)
        return dayDatas
    }   

    static async LumiByDay(day){
        const [dayDatas] = await connection.execute(`SELECT * FROM dataLuminosidade where LEFT(dataLuminosidade.dateHourData, 10) = "${day}";`)
        return dayDatas
    }

    static async UmiByDay(day){
        const [dayDatas] = await connection.execute(`SELECT * FROM dataUmidade where LEFT(dataUmidade.dateHourData, 10) = "${day}";`)
        return dayDatas
    }
};


module.exports = {
    Datas: Datas
};
