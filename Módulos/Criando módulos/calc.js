/*O comando export permite que determinadas partes do código
 sejam visíveis para o arquivo que importar o nosso arquivo calc.js*/

//Podemos fazer uma exportação padrão do nosso módulo, esta técnica atua como uma prevenção
//para situações em que o desenvolvedor esqueça de definir o que será importado.
//Para definir a importação padrão, utilizamos o operador default.

//Pública
export var myVar = 5;

//privada
var myvar2 = 10;

export function myFunc(){
    console.log('TreinaWeb');
}

export class Calc {
    static sum(a, b){
        return a + b;
    }
}

export default class ClassePadrao{
    static sum(a, b){
        return a + b;
    }
}

/*Outra forma de exportar os dados, seria fazer todo o código privado e na sequência, 
exportar um objeto com as variáveis, classes e funções que queremos deixar públicas*/
//Além disso, através deste método, também podemos mudar o nome da classe que estamos exportando,
//Utilizando o operador 'as'.
//Exemplo:

var myVar3 = 8;

function myFunc2(){
    console.log("função exportada");
}

class Calc2{
    static sum(a, c){
        return a + b;
    }
}

//export { myVar3, Calc2 as MyClass2, myFunc2 };

