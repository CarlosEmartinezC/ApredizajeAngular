interface AudioPlayer {
    audioVolume: number;
    songDuration: number
    song: string
    details: Details
}

interface Details {
    author: string
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
/* console.log('Primera manera sin destructurar')
console.log ('Song: ', audioPlayer.song)
console.log ('Author: ', audioPlayer.details.author) */
//Al tener una tarea muy repetitiva se puede destructurar un objeto sacando los valores que se desean como el siguiente ejemplo
/* const { song } = audioPlayer
console.log('Song: ',song) */
// que pasa si tenemos o agregamos una variable song nueva
/* const song = 'New Song'
//se puede destructurar con un objeto anidado en este ejemplo destructuramos el author que se encuentra en details
const { song:AnotherSong, songDuration:duration, details} = audioPlayer
const { author:Author } = details
console.log('Utilizando la destructuración ')
console.log('song: ', song)
console.log( 'Song: ', AnotherSong)
console.log( 'Duration: ', duration)

console.log('Author: ', Author) */












export {}