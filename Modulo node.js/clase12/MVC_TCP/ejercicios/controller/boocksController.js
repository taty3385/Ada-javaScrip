

// el controlador es el intermediario entre el modelo y la vista
const boockModel=require('../models/libros.js');
const boockView=require('../views/boocksViews.js');

const boockController={
    handleRequest:(id)=>{
        const boock=boockModel.getBookId(parseInt(id,10));
        return boockView.formatResponse(boock);
    }
}

module.exports=boockController; //exportamos el modulo boockController