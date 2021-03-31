//É um objeto que sabe como acessar um item de cada vez, de uma lista.
//done -> true quando o iterator terminou percorrer
//value -> o valor atual do iterator
//Os iterators guardam informações sobre o índice que ele estava percorrendo

//Iterator estão em todos os tipos de listas e arrays do js:
//array, setarray, set, map, string
//Isso porque estes tipos possuem um symbol no iterador


//Symbol.iterator

var str = 'TreinaWeb';
var myIterator = str[Symbol.iterator]();
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

var RandomNumbers = {
    [Symbol.iterator](){
        return this;
    },
    next(){
        var number = Math.floor(Math.random() * 5), isEven = (number % 2 === 0);

        return {value: number, done: !isEven};
    }
}

var numbers = RandomNumbers[Symbol.iterator]();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

//Esta execução acionará o método next, até a propriedade done ser retornada como true
console.log('teste 123');

//operador spread
console.log([...numbers]);

//operador For of
for(var number of numbers){
    console.log(number);
}

//Protegendo a propriedade next dos iterators

var Fibonacci = {

    [Symbol.iterator](){
        var n1 = 1,
            n2 = 1;
        
        return {
            [Symbol.iterator](){
                return this;
            },
            next(){
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                return {value: current, done: false}
            }
        }
    }
} 

var fib = Fibonacci[Symbol.iterator]();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());