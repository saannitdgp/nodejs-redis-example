const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('./test.json') // encodeURI =  'utf-8'
const writeStream = createWriteStream('./copy.json'); // used to write data on destination

// adding data event on read stream.
readStream.on('data', (chunk) => {
/*
Adds the listener function to the end of the listeners array for the event named eventName.
No checks are made to see if the listener has already been added. Multiple calls passing the
same combination of eventNameand listener will result in the listener being added, and called, multiple times.
*/
   writeStream.write(chunk);
});

readStream.on('end', () => {
    writeStream.end();
    console.log('Stream has ended');
});

readStream.on('error', (err) =>{
  console.log('Error has occurred', err);
});

writeStream.on('close', () => {
    console.log('File has been copied');
})