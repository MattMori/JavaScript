class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, Profissao = 'Professor'){
        super(sobrenome)
        this.Profissao = Profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('silva')
    }
}

const filho = new Filho

console.log(filho)
