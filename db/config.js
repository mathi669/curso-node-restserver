const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

const uri = process.env.MONGO_CNN;

const dbCOnnection = async()=>{

    try{
        // console.log(uri, typeof uri)
        mongoose.connect( uri );
            //mongoose 6 ya no soporta las opciones ingresadas y vienen por defecto activadas por lo que ya no es 
            //necesario utilizar las siguientes opciones
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                // useCreateIndex: true,
                // useFindAndModify: false

        console.log('Base de datos online');
        // console.log(process.env)

    } catch(err){
        console.log(Error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

module.exports ={
    dbCOnnection
}