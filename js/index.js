let number1 = "";
let number2 = "";

while (number1 == "" ) {
    number1 = prompt("Por favor, informe o primeiro número: ");
    number1 = Number(number1);

    isNaN(number1) ? number1 = "" : number1;

}

while (number2 == "" ) {
    number2 = prompt("Por favor, informe o segundo número: ");
    number2 = Number(number2);

    isNaN(number2) ? number2 = "" : number2 ;
}


let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let remainder = number1 % number2;
let sumIsPrime = sum % 2 == 0 ? "Par" : "Impar";
let isIqual = number1 == number2 ? "Iguais" : "Diferentes";

alert(`A soma dos dois número é ${sum}!`);
alert(`A subtração dos dois número é ${subtraction}!`);
alert(`A multiplicação dos dois número é ${multiplication}!`);
alert(`A divisão dos dois número é ${division}!`);
alert(`O resto da divisão dos dois número é ${remainder}!`);
alert(`A soma dos dois números é  ${sumIsPrime}!`);
alert(`Os números informados são ${isIqual}!`);

