const numeroSecreto = Math.floor(Math.random()*10+1)
const numeroJugador = parseInt(prompt('Adivina el número secreto entre el 1 al 10'))
console.log(`Este es el numero con el que juegas ${numeroJugador}`)
if(numeroJugador===numeroSecreto){
    console.log('¡FELICIDADES, ADIVINASTE EL NÚMERO SECRETO!')

}else if(numeroJugador<numeroSecreto){
    console.log('El número es demasiado bajo, intentalo de nuevo')
}else{
    console.log('El número es muy alto, intenta de nuevo')
}