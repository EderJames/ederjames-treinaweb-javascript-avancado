//Cada uma das funções auto executáveis criará um escopo diferente, devido a isso, podemos ter
//variaveis com o mesmo nome dentro de funções/módulos diferentes.

let Soma = (function(){
    let num1 = 5;
    let num2 = 5

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

let Subtracao = (function(){
    let num1 = 3;
    let num2 = 2;

    function sub(){
        console.log(num1 - num2);
    }

    return {
        sub,
        setNum1: function(n1){
            num1 = n1;
        },
        setNum2: function(n2){
            num2 = n2;
        }
    }

})();

//Estas funções auto executáveis criadas abaixo, também podem ser chamadas de módulos, tal como módulo de Soma e módula de Subtracao.
//Também podemos fazer com que um módulo venha a depender de outro módulo.
//Para exemplificarmos a dependência de módulos, poderiámos passar Soma, para dentro de Substracao2, através de parâmetros.

let Subtracao2 = (function(soma){
    let num1 = 3;
    let num2 = 2;

    function sub(){
        console.log(num1 - num2);
    }

    function utilizarModuloSoma(){
        soma.soma();
    }
    
    return {
        sub,
        setNum1: function(n1){
            num1 = n1;
        },
        setNum2: function(n2){
            num2 = n2;
        }
    }

})(Soma);
