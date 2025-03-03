const persona = {
    nombre: "Jhon",
    edad: 30,
    direccion: {
        calle: "Av Insurgentre 187",
        ciudad: "CDMX",
    },

    saludar(){ //metodo
        console.log(`hola, mi nombre es ${persona.nombre}`)
    },
};

console.log(persona);
persona.saludar();
persona.telefono = "555-555-5555";
console.log(persona.telefono);
persona.despedir = () => {
    console.log("Adios");
};
persona.despedir();
delete persona.telefono;
delete persona.despedir;
