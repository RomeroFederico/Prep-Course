// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var array = [];

  for (let clave in objeto)
    array.push([clave, objeto[clave]]);

  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {};

  for (var i = 0; i < string.length; i++)
  {
    if (objeto[string[i]] === undefined)
      objeto[string[i]] = 1;
    else
      objeto[string[i]]++;
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var cadenaMinuscula = "";
  var cadenaMayuscula = "";

  for (var i = 0; i < s.length; i++) 
  {
    if (s[i] === s[i].toUpperCase())
      cadenaMayuscula += s[i];
    else
      cadenaMinuscula += s[i];
  }
  
  return cadenaMayuscula + cadenaMinuscula;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var arrayPalabras = str.split(" ");
  
  var strInvertido = "";

  for (var palabra = 0; palabra < arrayPalabras.length; palabra++)
  {
    var palabraInvertida = "";

    for (var letra = arrayPalabras[palabra].length - 1; letra >= 0; letra--)
      palabraInvertida += arrayPalabras[palabra][letra];

    if (palabra !== arrayPalabras.length - 1)
      strInvertido += palabraInvertida + " ";
    else
      strInvertido += palabraInvertida;
  }

  return strInvertido;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var cadena = numero.toString();

  var cadenaInvertida = "";

  for (var letra = cadena.length - 1; letra >= 0; letra--)
    cadenaInvertida += cadena[letra];

  if (cadena === cadenaInvertida)
    return "Es capicua";
  else
    return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var nuevaCadena = "";

  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() !== 'a' && cadena[i].toLowerCase() !== 'b' && cadena[i].toLowerCase() !== 'c')
      nuevaCadena += cadena[i];
  }

  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((elem1, elem2) => {
    if (elem1.length < elem2.length)
      return 1;
    else if (elem1.length > elem2.length)
      return -1;
    else
      return 0;
  });

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  var interseccion = [];

  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j])
      {
        interseccion.push(arreglo1[i]);
        break;
      }
    }
  }

  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};