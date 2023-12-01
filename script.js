// Função com Parâmetros e Prompt
function calculadora(vitoria, derrota){
    var saldo = vitoria - derrota;
    
    if (saldo < 10){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de ferro.`);
    } else if (saldo >= 11 && saldo <= 20){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de Bronze.`);
    } else if (saldo >= 21 && saldo <= 50){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de Prata.`);
    } else if (saldo >= 51 && saldo <= 80){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de Ouro.`);
    } else if (saldo >= 81 && saldo <= 90){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de Diamante.`);
    } else if (saldo >= 91 && saldo <= 100){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de Lendário.`);
    } else if (saldo >= 101){
        console.log(`O Herói tem de saldo de ${saldo} vitoria e está no nivel de Imortal.`);
    }
}

