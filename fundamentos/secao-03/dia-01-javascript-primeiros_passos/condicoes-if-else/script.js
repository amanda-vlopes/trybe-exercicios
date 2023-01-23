const notaCandidato = 88;
if (notaCandidato >= 80) {
    console.log ('Parabéns, você faz parte do grupo das pessoas aprovadas!')
} else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log ('Você está na nossa lista de espera')
} else if (notaCandidato < 60 ) {
    console.log ('Infelizmente, você reprovou')
} else {
    console.log ('Não encontramos a nota da sua prova')
}
