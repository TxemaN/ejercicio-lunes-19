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


let divisor = 0;
const esPrimo = (num) => {
    divisor++;
    if (num % divisor == 0) { return true }
    else { return false }
}
//mezclar arrays y funciones//
const ordenarArray = (listanumeros=[]) => {
return listanumeros.sort();
}
let obtenerPares = (array) =>  { return array.filter(element => element % 2 === 0)}
