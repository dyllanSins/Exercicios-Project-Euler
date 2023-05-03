// Exercicio 1: Multiplos de 3 OU 5.
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// (translate)Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// (translate)Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

const limite = 1000;
const x = 3;
const y = 5;
let somaResto = 0;

for (let i = 0; i < limite; i++) { // enquanto i for menor que o limite, adiciona +1 ao valor
    if ((i % x) === 0 || ((i % y) === 0)) { // se o resto da conta de i dividido por 3 OU 5 for igual a 0,
        somaResto += i; // soma e armazena o valor atual de i ao valor de somaResto
    }
}
console.log(somaResto); // resultado final

