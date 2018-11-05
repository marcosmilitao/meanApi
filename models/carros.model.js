var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var CarroSchema = new mongoose.Schema({
    Modelo: String,
    Fabricante: String,
    AnoFabricacao: Date,
    Cor: String
})

CarroSchema.plugin(mongoosePaginate)
const Carro = mongoose.model('Carro', CarroSchema)

module.exports = Carro;