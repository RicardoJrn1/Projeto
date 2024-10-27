function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b< numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === numero || numero === 0) {
        return `O número ${numero} pertence á sequência de Fibonacci.`; 
    } else {
        return `O número ${numero} NÃO pertence á sequência de Fibonacci.`;
    }
}

//Por aqui é possivel escolher um número e testar no terminal
//No terminal colocar: node fibonacci.js
const numero = 30;
console.log(pertenceFibonacci(numero));