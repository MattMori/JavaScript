// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Logan',
    valor: 18500,
    proprietario: {
        nome: 'Marcos',
        idade: '27',
        endereco: {
            logradouro: 'rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 20
    }],
    calcularValorSeguro: function() {
        //...
    }
}
    
    carro.proprietario.endereco.numero = 1000
    carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

    console.log(carro)

    //delete carro.condutores
    //delete carro.proprietario.endereco
    delete carro.calcularValorSeguro
    console.log(carro)
    console.log(carro.condutores)
    console.log(carro.condutores.length)
    
