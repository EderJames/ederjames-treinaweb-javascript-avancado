var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

myPromise.then(value => {
    console.log(`My value: ${value}`);
    return 900;
})
.then(value => {
    console.log(`My value: ${value}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 2000)
    })
})
.then(value => {
    console.log(`My Value: ${value}`);
});


//Garantindo que o resultado de uma função seja interpretado como uma promise, criando uma promise através do método estátitco Promise.resolve(valorQueDeveVirarPromise)
//Neste exemplo, estamos garantindo que myFunc seja tratado como uma promise.
function myFunc(){
    return { teste: 'teste123', propriedadeTeste2: 'teste321' };
}

var myValue = myFunc();
var myPromise2 = Promise.resolve(myValue);
myPromise2.then(value => {
    console.log(`Prop1: ${value.teste}, Prop2: ${value.propriedadeTeste2}`);
});
    
//Neste exemplo, fazemos o mesmo procedimento, porém, com um tipo primitivo:
var myPromise3 = Promise.resolve(77);
myPromise3.then(value => {
    console.log(`Resultado: ${value}`);
});

//Utilizando o método Promise.race();
//O método race recebe uma lista de promises, este método executa o .then() para a primeira promise que será resolvida ou quando ocorrer um erro na promise
var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

var p2 = Promise.resolve(77);

Promise.race([p1, p2]).then((value) => {
    console.log(`Resultado do race: ${value}`);
});

//Além do método estático Promise.race, também temos a opção do método Promise.all(), este método executa a função then() somente quando todas as promises são executadas, ou quando uma delas gerar um erro.
Promise.all([p1, p2]).then((value) => {
    console.log(`Resultado do método estático Promise.all: ${value}`);
});
