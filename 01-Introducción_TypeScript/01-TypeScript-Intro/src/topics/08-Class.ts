/* forma larga de declarar una clase
export class Person {
    public name: string
    public address: string

    constructor() {
        this.name = 'Fernando'
        this.address = 'New york'
    }

} */

//forma corta de declarar las clases en typescript
export class Person {


    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {}

}
/* export class Hero extends Person {
 
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( alterEgo, 'New york')
    }

} */
export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        /* this.person = new Person(realName) */
    }

}


const tony = new Person('tony stark', 'New york')
const iroman = new Hero('Ironman', 46 , 'Tony Stark', tony)

console.log(iroman)



/* O sea tratar de priorizar la composición sobre la herencia que significa la composición obviamente nuestro m necesita los datos de persona para tener el nombre y la dirección yo lo que quiero hacer es evitar tener ese esa extensión ahí de persona voy a comentar esta línea o crear una copia mismo sólo para mantenerlo como referencia para que ustedes en el código fuente final y voy a remover este extensa persona obviamente aquí va a fallar porque estoy llam

 */


