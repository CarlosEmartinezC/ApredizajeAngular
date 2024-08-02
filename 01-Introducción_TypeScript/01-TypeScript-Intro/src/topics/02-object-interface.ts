let skills: string[] = ['Bash', 'Couter', 'Healing']

/* al tipar un objeto que cuente con array internos o datos es mejor declararlo o tiparlo con una interface */

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string /* si le agrego un ? a hometown esta interface cuando se utilice lo omitira si no lo tiene los datos pero es mejor que utilizar | debido a que con este toca si o si declarar este dato en el objeto */
}



const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell'

console.table(strider)

export {}