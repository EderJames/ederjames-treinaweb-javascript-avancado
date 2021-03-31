//Proxies servem para definir comportamentos de operações como atribuições de valores e chamada de funções

let myObj = {
    a: 1,
    b: 2,
    c: 3
}

delete myObj.c;

//target -> proprio objeto que o proxy está observando
//prop   -> propriedade que será utilizada pelo proxy
//receiver -> o próprio proxy
//get ->  função de get do proxy

//A utilização de proxies nos permite manipular e programar todas as
//funcionalidades e todos os comportamentos que ocorrerão na manipulação de um objeto
//Neste exemplo, estamos manipulando os comportamentos que o código faz, quando alteramos ou quando pegamos
//uma propriedade do objeto myObj.

let myProxy = new Proxy(myObj, {
    get: function(target, prop, receiver){
        console.log(`Você acessou ${prop}`);
        return target[prop];
    },
    set: function(target, prop, value){
        console.log(`Você acessou ${prop}`);
        
        if(prop !== 'a' && prop !== 'b'){
            return false;
        }
        
        target[prop] = value;
        return true;
    }
});
