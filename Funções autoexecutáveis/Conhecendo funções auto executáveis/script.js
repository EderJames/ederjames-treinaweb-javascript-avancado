//Funções auto executáveis

//Antes de entendermos o conceito de funções auto-executáveis, precisamos compreender que o js
//permite/entende que quando colocamos um código dentro de parênteses, e o acionamos, recebemos o retorno dele.

//Exemplo, recebendo o retorno de uma expressão:
console.log(`Resultado da soma de 5 + 3: ${(5 + 3)}`);

//O mesmo vale para as funções, caso coloquemos a função olá entre parênteses:

(function ola(){
    console.log('olá');
});

//Portanto, para fazemos com que a função ola() transforme-se em auto executável, devemos fazer o seguinte:
(function ola2(){
    console.log('olá auto executável');
})();

//Esta declaração acima faz com que acionemos o retorna da função entre parenteses.

//Também podemos fazer este procedimento através de funções anônimas:
(function(){
    console.log('olá auto executável anônimo');
})();

//Funções auto executáveis,recebendo parâmetros
(function soma(a, b){
    console.log(a + b);
})(8, 7);

//Trabalhando com o escopo de funções auto executáveis

let obj = (function(){
    let num1 = 5;
    let num2 = 3

    function soma(){
        console.log(num1 + num2);
    }

    return {
        soma,
        setNum1: function(n1){
            num1 = n1;
        },
        setNum2: function(n2){
            num2 = n2;
        }
    }

})();

//Através do objeto retornado pela função anônima auto executavel,
//temos a capacidade de acionar a função soma() e de setar os valores internos da nossa função auto executável
obj.soma();

obj.setNum1(5);
obj.soma();

obj.setNum2(6);
obj.soma();