const pai = { nome: 'pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

 