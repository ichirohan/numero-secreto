alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
console.log(numeroSecreto);
let tentativas = 1;
//enquanto o chute não for igual ao N.s
while (chute != numeroSecreto){
     chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
     // se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
} else {
    if (chute > numeroSecreto){
    alert(`O numero secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }
    // Tentativas = tentativas + 1;
    tentativas++;
}

}
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`);
//
//if (tentativas > 1) {
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
   // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}