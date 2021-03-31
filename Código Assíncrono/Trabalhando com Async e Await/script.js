//assync e await
//Códigos assíncronos parecidos com código lineares

//Sem utilizar async e await
function sum(a, b){
    return new Promise(resolve => {
        setTimeout(() => { resolve(a + b) }, 1000);
    })
}

sum(5, 3).then(result => console.log(`chamada com o then(): ${result}`));

//utilizando async e await
async function start(){
    let result = await sum(5, 3);
    console.log(`chamada com o async/await: ${result}`);
}

start();

(async function Soma(){
    function sum(a, b){
        return new Promise(resolve => {
            setTimeout(() => { resolve(a + b) }, 1000);
        })
    }
    
    let result = await sum(5,3);
    console.log(`utilizando funções auto executáveis: ${result}`);

})();

(async function SomaDupla(){
    function sum(a, b){
        return new Promise(resolve => {
            setTimeout(() => { resolve(a + b) }, 1000);
        })
    }
    
    //Este tipo de declaração de variável permite que o js atribua a sum(5,3) para result1 e a sum(8,7) para result2
    let [result1, result2] = await Promise.all([sum(5,3), sum(8,7)]);
    console.log(`utilizando funções auto executáveis com Promise.all: ${result1} - ${result2}`);

})();


//Funções async sempre retornam uma promisse
async function abc(){
    return 5;
}

//As funções assíncronas sempre retornam promisses, portanto, podemos obter o valor delas através destas duas formas:

//primeira forma
abc().then(a => console.log(`resultadp da função abc: ${a}`) );

//segunda forma:
//await abc();
//console.log(`retorno de abc com await: ${ retornoAbc }`);