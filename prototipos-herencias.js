class Animal {
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal{
    constructor(nombre,tipo,raza){
        super(nombre,tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("El perro ladra");
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro ("Bobby","Perro","Pug");
const animal1 = new Animal ("lotty","Loba");
console.log(perro1);
console.log(animal1);
perro1.correr();
perro1.emitirSonido();
animal1.emitirSonido();