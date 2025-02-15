console.log('Hola, mundo feliz :)')
//-----------------------------------------------------
let cajaDeAndy='Woody'
console.log(cajaDeAndy)
//-----------------------------------------------------
//Tipos de datos Primitivos
//-----------------------------------------------------

//String
let nombre='Gaby'
//number
let edad=25
//boolean
let esMayorDeEdad=true
//null
let noHayValor=null
//undefine
let noDefinido=undefined
//symbol
let simboloUnico=Symbol('único')
//bigint
let numeroGrande=2n

//----------------------------------------------------------
//Tipos de datos Complejos
//----------------------------------------------------------

//Object
let carro = {
    marca : 'Tesla',
    modelo : 'Model S'
}
//array
let frutas=['manzana','banano','uvas']
//function
function saludar(){}
//--------------------------------------------------------------------
//Tipo String
//--------------------------------------------------------------------
let string1 = 'Hola mundo'
let string2 ="JavaScript es genial"
let string3 =`${string1} feliz :)`

console.log(string1)
console.log(string2)
console.log(string3)

let string4= string1+' '+string2

//----------------------------------------------------------------------

let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length) //contamos caracteres más espacios
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.substring(0,10))

//-----------------------------------------------------------------------
//Operaciones Aritmeticas 
//-----------------------------------------------------------------------

//1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)
//------------------------------------------------------------------------
//2. Notacion científica
const cientifico= 5e3 //5000
console.log(cientifico)
//----------------------------------------------------------------------
//3. Infinity y NaN
const infinito = Infinity
const noEsUnNumero = NaN
//------------------------------------------------------------------------
//Operaciones Aritmeticas
//Suma,Resta,Multiplicacion y Division
const suma = 3+4
const resta = 4-4
const multiplicacion=4*7
const division=16/2
// Modulo y Exponencial
const modulo = 15%8
const exponencial = 2**3

//Precisiòm
const resultado=0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado===0.3)

//Operaciones Avanzadas
const raizCuadrada=Math.sqrt(16)
const valorAbsoluto=Math.abs(-7)
const aleatorio=Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
console.log('--------------------------------------------------')
//Conversion de Tipos: Type Casting y Coerción
//Explicit Type Casting
const string='42'
const integer = parseInt(string)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary='1010'
const decimal1 = parseInt(binary,2)
console.log(decimal1)
console.log(typeof decimal1)

//Implicit Type Casting 
//-----------------------------------------
console.log('--------------------------------------')
const sum = '5'+3
console.log(sum)

const sumWithBoolean='3'+true
console.log(sumWithBoolean)

const sumWithNumber=2+true
console.log(sumWithNumber)

console.log('-------------------------------------------------')
const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue) //CONCATENA
console.log(stringValue + numberValue) //CONCATENA
console.log(stringValue + booleanValue) //CONCATENA

console.log(numberValue + stringValue) //CONCATENA
console.log(numberValue + numberValue) //SUMA
console.log(numberValue + booleanValue) //SUMA

console.log(booleanValue + stringValue) //CONCATENA
console.log(booleanValue + numberValue) //SUMA
console.log(booleanValue + booleanValue) //SUMA

//----------------------------------------
console.log('------EJERCICIO------')
const numero1 = '596'
const numeroConvertido = parseInt(numero1)

console.log(typeof numero1)
console.log(typeof numeroConvertido)


