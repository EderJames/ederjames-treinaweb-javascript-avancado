let myDate = new Date('2020-12-31T12:00:00');


let formatterBr = new Intl.DateTimeFormat('pt-BR');
let formatterBrDayOfWeek = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long'
});

let formatterBrDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

let formatterEnUs = new Intl.DateTimeFormat('en-US');
let formatterEnUsDayOfWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'long'
});

let formatterEnDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

let formatterJpDate = new Intl.DateTimeFormat('jp-JP', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

let formatterArDate = new Intl.DateTimeFormat('ar', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

//O objeto Intl é utilizado para fazer a internacionalização dos dados da nossa aplicação.

console.log(`Date em pt-BR: ${formatterBr.format(myDate)}`);
console.log(`Dia da semana em pt-BR: ${formatterBrDayOfWeek.format(myDate)}`);
console.log(`Data formatada em pt-BR: ${formatterBrDate.format(myDate)}`);

console.log(`Data em en-US: ${formatterEnUs.format(myDate)}`);
console.log(`Dia da semana em en-US: ${formatterEnUsDayOfWeek.format(myDate)}`);
console.log(`Data formatada em en-US: ${formatterEnDate.format(myDate)}`);

console.log(`Data em jp: ${formatterJpDate.format(myDate)}`);
console.log(`Data em ar: ${formatterArDate.format(myDate)}`);