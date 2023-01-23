const Pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']

Pilotos.pop() // remove o ultimo elemento do array
console.log(Pilotos)

Pilotos.push('Verstapppen') // insere um elemento na ultima posição do array
console.log(Pilotos)

Pilotos.shift() //remove o primeiro elemento do array
console.log(Pilotos)

Pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição do array
console.log(Pilotos)

// splice pode adcionar e remover elementos

// adicionar
Pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(Pilotos)

//remover
Pilotos.splice(3,1)
console.log(Pilotos)

const algunsPilotos1 = Pilotos.slice(2) // cria um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = Pilotos.slice(1,4)
console.log(algunsPilotos2)

