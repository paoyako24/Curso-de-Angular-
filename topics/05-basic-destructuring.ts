
interface AduioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: {};
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AduioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song:"Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const song = 'New Song';

const { song:anotherSong, songDuration:duration,details  } = audioPlayer;
const { author} = details;

//console.log('Song: ', anotherSong );
//console.log('Duration: ', duration );
//console.log('Author: ', audioPlayer.details.author );
//console.log( 'Author: ', author);


const [ , , trunks = 'Not found' ]: string[] = ['Goku', 'Vegeta' ];

console.error('Personaje 3:', trunks );






export {};