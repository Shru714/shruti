const mongooes=require('mongoose')

async function connect(){
    try{
        await mongooes.connect('mongodb://localhost:27017/ecom');
        console.log('db connected');

    }catch(error){
        console.log('error while connecting to db');

    }
}

module.exports=connect