//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e
// o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
//se o número informado pertence ou não a sequência.


function fibo(num){

    
    let a = 0;
    let b = 1;
    let c = 0;
    let pertence = false;
    let i = 0;
    while (i < num) {
        c = a + b;
        a = b;
        b = c;
        if (c == num) {
            pertence = true;
            break;
        }
        i++;
    }
    if (pertence) {
        console.log('O número ' + num + ' pertence a sequência de Fibonacci');
    } else {
        console.log('O número ' + num + ' não pertence a sequência de Fibonacci');
    }
}

fibo(13); 
fibo(14); // O número 14 não pertence a sequência de Fibonacci
fibo(21); 
fibo(22); 