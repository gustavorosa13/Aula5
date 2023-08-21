/*
* Primeiro programa em JavaScript
* Gustavo Gonçalves da Rosa
*/

console.log("Olá mundo!");
//prompt("Qual é o seu nome?");
//Variavel const
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC);

//Variável let
let numero = 5;
console.log(numero);
numero = 120;
console.log(numero);

//Concatenar textos
/*let nome = "Gustavo";
let sobreNome = "Gonçalves";
let idade = 17;
console.log("Olá", nome, sobreNome, "você tem", idade, "anos");
*/
//boleanas
const variavelFalsa = false;
const variavelVerdadeira = true;

console.log("Variável falsa: " + variavelFalsa);
console.log("Variável verdadeira " + variavelVerdadeira);

// Exercício 1

/*let nome = "Gustavo";
let sobreNome = "Gonçalves";
let idade = 17;
let estudante = "2 ano do Ensino médio";
console.log("Olá", nome, sobreNome, "você tem", idade, "anos", "seu status de estudante é:", estudante);
*/


//typeof
/*
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante); 
*/

const vazio = null;
console.log(typeof vazio);

// Exercício 2

let nome = prompt("seu nome");
console.log(nome);

let idade = prompt("qual sua idade");
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);
