function verificarLetraA(str) {
    let contador = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            contador++;
        }
    }
    
    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vez(es) na string.`;
    } else {
        return "A letra 'a' não está presente na string.";
    }
}

//Teste com uma string 
//No terminal colocar: node verificarLetraA.js
const texto = "Vamos caminhar";
console.log(verificarLetraA(texto));
