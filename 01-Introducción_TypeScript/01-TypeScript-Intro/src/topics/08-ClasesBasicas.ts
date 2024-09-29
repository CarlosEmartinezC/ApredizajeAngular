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
export class Hero extends Person {
 
}
const iroman = new Hero('Ironman')

console.log(iroman)




