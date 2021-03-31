/*
Para fazermos importações, utilizamos a palavra-chave import, seguido da abertura
de chaves e dos nomes das propriedades que estamos importando, 
elas devem seguir o mesmo nome que possuem na exportação do arquivo calc.js
Além disso, também podemos alterar o nome da função que está sendo importada, através do operador 'as', isto evita que tenhamos
conflitos, em situações de mais de um arquivo conter o mesmo nome de variáveis.
*/

import { Calc, myVar, myFunc } from './calc.js';

//**Importando todo o módulo:
//Temos a possibilidade de importar todo o módulo presente em um arquivo, para isso, associamos este módulo a uma variável
//Neste caso, associamos o módulo do arquivo calc.js para a variável MyModel
//**ObS: Não é recomendado importar todo o módulo, a menos que seja muito necessário
// import * as MyModel from './calc.js';

//**importando o default do calc.js
// import minhaImportacaoCal from './calc.js';

//**Importando o default e mais coisas
// import minhaImportacaoCal, { myVar, myFunc } from './calc.js';

myFunc();

console.log(Calc.sum(5, 3), myVar);