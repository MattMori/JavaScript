let consumoMaior = 1;
let aptoMaior = 1;
let QuantidadeApto = prompt("digite a quantidade de aptos: ");

    for (let I = 0; I < QuantidadeApto; I++) {
        let apto = prompt ('Digite o numero do apto: ')
        let consumoApto = prompt ('Digite o consumo do apto: ')
            if (consumoApto > consumoMaior) {
                consumoMaior = consumoApto
                aptoMaior = apto   
    				}
    
    }  

console.log("o apto de maior consumo é o " + aptoMaior + " e o maior consummo é "+ consumoMaior);
