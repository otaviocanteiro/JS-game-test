alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
//a expressão "!=" representa "não igual" ou seja, diferente
while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
   
    //se o chute for igual ao númeo secreto
    if (numeroChute == numeroSecreto) {
        break
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroChute}`);
        } else {
            alert(`O número secreto é maior que ${numeroChute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com: ${tentativas} ${palavraTentativa}.`);