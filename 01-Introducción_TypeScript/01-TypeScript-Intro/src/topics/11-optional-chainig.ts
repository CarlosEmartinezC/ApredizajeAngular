export interface Passenger {
    name:string,
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Carlos'
}

const passenger2: Passenger = {
    name: 'Laura',
    children: ['Afrodita', 'Odie']
}


const retunrChildren = (passenger: Passenger) => {
    // en este caso arrogara un undefind  y si agregamos || con este simbolo nos evitamos hacer un if y preguntar si no hay datos
 /* const howManyChildren = passenger.children?.length || 0 */

    // si le colocamos ! es decir que le decimos a typescript que siempre va a recibir un dato y da un error si no damos un dato.
    const howManyChildren = passenger.children!.length

    console.log(passenger.name, howManyChildren)
    return howManyChildren
}

retunrChildren(passenger1)