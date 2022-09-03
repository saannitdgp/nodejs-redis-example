/*
Duplex streams, on the other hand, are a mixture of both the readable and writable
streams where both streams are independent of each other.
The PassThrough stream is a basic type of Duplex stream
that acts as a tunnel to pipe our Readable stream to the Writable stream.

*/

const { PassThrough, Duplex } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("./README.md");
const writeStream = createWriteStream("./copy.txt");

const tunnel = new PassThrough();


/*
Besides PassThrough, we have Throttle to delay how long data passes from one source to another in the pipeline.
We can use Duplex streams to set a delay of when the data is brought into our application:
*/

class Throttle extends Duplex {
    constructor(ms){
        super();
        this.delay = ms;
    }
  _read () {


  }

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }
  _final(){
      this.push(null);
  }
}

const throttle = new Throttle(10000);

tunnel.on("data", (chunk) => {
  console.log("bytes:", chunk + '\n');
});

readStream.pipe(throttle).pipe(tunnel).pipe(writeStream);
