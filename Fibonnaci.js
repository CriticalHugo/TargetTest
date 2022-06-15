const Numero = 10;
var Anterior = 0, Posterior = 1, Resultado = 0;

while (Resultado < Numero) {

    Resultado = Anterior + Posterior

    if (Resultado > Numero) {
        console.log(`O número informado não está na sequência de Fibonacci. Número informado: ${Numero}`);
        break;
    }

    if (Resultado == Numero) {
        console.log(`O número informado está na sequência de Fibonacci. Número informado: ${Numero}`);
        break;
    }

    Anterior = Posterior;
    Posterior = Resultado;

}