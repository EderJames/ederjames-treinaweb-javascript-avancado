let myNumber = 1285;

//O objeto Intl é utilizado para fazer a internacionalização dos dados da nossa aplicação.

let formatterEn = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

let formatterBr = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

//Aqui estamos utilizando a formatação de número norte-americana, com o estilo de moeda Japonês
let formatterJpn = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'JPY'
});

console.log(`Número em en-us, no formato de moeda: ${formatterEn.format(myNumber)}`);
console.log(`Número em pt-br, no formato de moeda: ${formatterBr.format(myNumber)}`);
console.log(`Número em jp-, no formato de moeda: ${formatterJpn.format(myNumber)}`);
