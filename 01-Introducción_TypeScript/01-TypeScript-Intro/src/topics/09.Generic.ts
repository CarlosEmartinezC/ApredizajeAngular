
/* nosotros tenemos que tratar siempre de nunca utilizar el tipo de dato ANY
porque esto le quita toda las restricciones a TypeScripts */

/* export function whatsMyType (argument: any ) {
   
    return argument
}


const amIString = whatsMyType('Hola Mundo')

console.log(amIString.split(' ')) */

/* esto es un ejemplo de el tipo de dato ANY y porque es tan peligroso. */

//Ejemplo 2
// esto <T> significa que le obligamos a typescript a que trate ese dato y cuando colocamos otro valor o tipo de dato seria asì
export function whatsMyType<T>(argument: T): T {

    return argument
}

// vamos a colocar que sea string <string>
const amIString = whatsMyType<string>('Hola Mundo')
const amINumber = whatsMyType<number>(100)
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6])

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))
