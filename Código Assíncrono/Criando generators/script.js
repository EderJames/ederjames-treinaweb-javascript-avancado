//Generators são funções que podem ser pausadas e depois podemos mandar que ela continue de onde parou
//O comando que faz com que a função seja pausada é o comando yield.
//O yield retorna um objeto com o valor e com o done
function* myCounter(){
    var i = 0;
    while(true){
        yield i++;
    }
}

function *myCounter2(){
    var i = 0;
    while(true){
        yield i++;
    }
}

var counter = myCounter();
var counter2 = myCounter2();

console.log(counter.next());
console.log(counter2.next());

//Nesta função temos dois comandos do tipo yield, portanto temos duas paradas
function* myGenerator(){
    yield 5;
    console.log('we are back!');
    yield 10;
}

var myGen = myGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

//retorna o array inteiro de uma vez só
function* myGenerator2(){
    yield [1,2,3,4,5];
}

var myGen2 = myGenerator2();

//retorna as partes do array, de acordo com o comando next()
function* myGenerator3(){
    yield* [1,2,3,4,5];
}

var myGen3 = myGenerator3();

//usando generator com spread
console.log(...myGen3);