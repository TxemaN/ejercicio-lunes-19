//Arrays//

arrayVacio = [];
arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayNumerosPares = [0, 2, 4, 6, 8];
arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//FUNCIONES//
const suma = (num1, num2) => {
    return num1 + num2;
};

 
var potenciacion = (num3, num4) => {
    
     return  Math.pow(num3, num4)
};


const separarPalabras = (palabra) => {
    return palabra.split(" ");
};

const repetirString = (palabra2, numero) => {
    for (let i = 0; i <= numero; i++) {
        return palabra2.repeat(numero)
    }
};


let esPrimo = num1 => {
    if (num1 <= 1) {
        console.log(num1 + " no es primo");
        return false;
    }
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            console.log("no es primo");
            return false;
        }
    }
    console.log("es primo");
    return true;
}


//mezclar arrays y funciones//
const ordenarArray = (listanumeros=[]) => {
return listanumeros.sort();
}
let obtenerPares = (array) =>  
{ return array.filter(numerito => numerito % 2 === 0)}


const pintarArray = (array) => {

    return array.join(", ");
    } 

    
    
const arrayMapi = (array, funk) => array.map(afectado => funk(afectado));

  var arrayNuevo=[];
  const eliminarDuplicados= (array) => {
    array.forEach(element => {
        const encontrado=arrayNuevo.find(cosa=>cosa==element)
        if (!encontrado) {arrayNuevo.push(element)}
    });
  }
  

//Iteraciones 🏰 proyecto 🏰//
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays=[[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//FUNCIONES//

const multiplicacion = (num1, num2) => {
    return num1 * num2;
};
const division = (num1, num2) => {
    return num1 / num2;
};

const esPar = (num1) => 
{if (num1 %2 == 0) { return true }
else { return false }};

//Mezclando arrays y funciones//
const ordenarArray2 = (listanumeros=[]) => {
    return listanumeros.reverse()};


const obtenerImpares = (array) =>  
{ return array.filter(numerito => numerito % 2 === 1)};


const sumarArray = (array) => 

    { return array.reduce((primerelemento, restoelementos) => primerelemento + restoelementos)};
     const multiplicarArray = (array) => 
     { return array.reduce((primerelemento, restoelementos) => primerelemento * restoelementos)};