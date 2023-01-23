// pessoa -> 123 ->{...}
const pessoa = { nome: 'joao' }
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'ana' }
//object.freeze congela o objeto e não permite mais alterar os atributos
Object.freeze(pessoa)
pessoa.nome = 'maria'
console.log(pessoa.nome)
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const PessoaConstante = Object.freeze({ nome: 'joão'})
console.log(PessoaConstante)