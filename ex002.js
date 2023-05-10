/*
Desafio: Fibonacci

Cada novo termo na sequência de Fibonacci é gerado pela adição dos dois termos anteriores. A partir de 1 e 2, os 10 primeiros termos serão:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Ao considerar os termos da sequência de Fibonacci cujos valores não excedem quatro milhões, encontre a soma dos termos de valor par.
*/

let limite = 4000000; // limite 4Milhões
let soma = 0;
let x = 1;
let y = 2;

while (y <= limite) { //enquanto Y for menor que o Limite:
    if (y % 2 === 0) { 
        soma += y; //se o resto for 0, o valor de Y será guardado na variavel soma
    }
    
    let prox = x + y; //proximo numero recebera o valor de X + Y
    x = y; // x recebera o valor de Y
    y = prox; // y recebera o valor do proximo
}

console.log(soma);