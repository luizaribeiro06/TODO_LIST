//importar o mongoose
const mongoose = require('mongoose')

//script de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:loginregistro@fiaptecnico.0ptot.mongodb.net/dblr')
}

//exportar as informações para acesso externo
module.exports = conn

