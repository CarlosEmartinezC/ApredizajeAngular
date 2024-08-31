

/* en las funciones despues del addNumber(): este dos puntos significa el valor de retorno 
por defecto typescript define que un void que significa no retorna nada. */

function addNumbers(a:number , b:number) {
    return a+ b
}
addNumbers(1, 2)

const addNumbersArrow = (a: number, b: number): string => {   /* en una funcion flecha  se puede especificar el resultado que devuelve 
    si se cambia a string nos da un error porque la firma de la función sabe que es un numero  */
    return `${a + b}`  /* agregando `` se cambia a ser un to.string es decir pasa de ser un numero a ser un tecto */
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) { /* se aconseja que lo primero es colocar los valores obligatorios y despues secundarios ypor ultimo el de valor por defecto */
    return firstNumber * base
}



// const result: number = addNumbers(1,2)
// console.log({ result })
// const result2: string = addNumbersArrow(1,2)
// console.log({result2})
/* const multiplyResult: number = multiply (5)
console.log({multiplyResult})
 */
interface Character {
    name: string
    hp: number
    showHp: () => void // para declarar una funcion se hace asi despues de las flechas esta lo que queremos que retorne
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp () {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}
healCharacter( strider, 10)
healCharacter( strider, 50)




export {}