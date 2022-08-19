const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbCOnnection = async()=>{

    try{

        mongoose.connect( process.env.MONGO_CNN);
            //mongoose 6 ya no soporta las opciones ingresadas y vienen por defecto activadas por lo que ya no es 
            //necesario utilizar las siguientes opciones
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                // useCreateIndex: true,
                // useFindAndModify: false

        console.log('Base de datos online');

    } catch(err){
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

module.exports ={
    dbCOnnection
}