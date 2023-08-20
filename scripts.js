const result = document.getElementById("result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'sciossors']
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)
    console.log(result)

    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (machine === 'scissors' && human === 'rock') ||
        (human === 'scissors' && machine === 'paper')
        ) {
            humanScoreNumber++ // AQUI ELE VAI ADC UM A MAIS SEMPRE
            humanScore.innerHTML = humanScoreNumber //  AQUI ELE VAI COLOCAR O 
        result.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = humanScoreNumber
        result.innerHTML = 'A Alexa ganhou!'
    }

}