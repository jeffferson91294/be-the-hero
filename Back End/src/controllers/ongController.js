const connection = require('../database/connections')
const crypto = require('crypto') //pacote do node.js usado para criar caracteres para criptografia


module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },


    async create(request, response){
        //async: determina uma funcao como assincrona
    // const data = request.body
    const {name, email, whatsapp, city, uf} = request.body

    //usando a funcao do cripto para gerar numeros de 4 caracteres randomicos e depois convertendo para strings do tipo hexadecimal
    const id = crypto.randomBytes(4).toString('HEX')
    // console.log(data)
    //Await: aguarda a execucao do chamado para executar o proximo passo
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json({ id });
    }
}