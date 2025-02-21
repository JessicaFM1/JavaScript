const fictionalCharacter = {
    name: 'Uncle Ben',
    MessageWithTraditionalFunction:function(message){
    console.log(`${this.name} says: ${message}`)
},

messageWithArrowFunction:(message)=>{
    console.log(`${this.name} says: ${message}`)
}
}

fictionalCharacter.MessageWithTraditionalFunction('With great power comes great responsability')
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')
