// los decoradores son mas que funciones especiales que se adjuntan a diferentes objetos
// los decoradores despues de la segunda version de typescript a estado en tipo esperimental
//ejemplo
function ClassDecorator<T extends{new(...args:any[]):{}}>(constructor: T) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    };
}

//un decorador se puede utilizar en cualquier sitio pero se llama con un @ es decir

@ClassDecorator
// si se coloca sin el @ da error de duplicidad despues de la segunda linea que este nombrada asi, por otra parte no es tomada en cuanta
/* ClassDecorator */
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo');
    }
}


console.log( SuperClass)

const myClass = new SuperClass()
console.log(myClass)
console.log(myClass.myProperty); // Output: Abc123
myClass.print(); // Output: Hola mundo

/* print de consola

{
    "myProperty": "Abc123",
    "newProperty": "New Property",
    "hello": "override"
}
    
*/