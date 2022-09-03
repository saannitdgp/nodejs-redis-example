const {Readable} = require('stream');

const adviceToMe = [
    'Start Gym and focus on health',
    'Work on Aims'
]

class StreamFromArray extends Readable{
    constructor(array){
        super({objectMode: true}); //encoding: 'utf-8': converts buffers into string
        this.array = array;
        this.index = 0;
    }
   _read() {
    if(this.index > this.array.length) {
        this.push(null);
    }
    else {
    const chunck = this.array[this.index];
    this.index += 1;
    this.push(chunck);
    }
 }
}
const adviceToMeStream = new StreamFromArray(adviceToMe);

adviceToMeStream.on('data', (chunck) => console.log(chunck));

adviceToMeStream.on('end', () => console.log('Stream End'));

// events 

/**
             * Event emitter
             * The defined events on documents including:
             * 1. close
             * 2. data
             * 3. end
             * 4. error
             * 5. pause
             * 6. readable
             * 7. resume
             */