"use strict";
// 1 - void
function withoutReturn() {
    console.log("Está função não tem retorno!");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Danilo");
preGreeting(greeting, "Joao");
