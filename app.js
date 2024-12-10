alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute

// enquanto o chute nao for igual n.s. vai continuar rodando o jogo
while (chute != numeroSecreto) {
        chute = prompt('Escolha um número entre 1 e 10');
        // se chute for igual ao número secreto
        if (chute == numeroSecreto) {
            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
            if (chute > numeroSecreto) {
                alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`)
        }

    }
}    