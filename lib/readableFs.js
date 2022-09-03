const fs = require('fs');

const readStream = fs.createReadStream('./test.json') // encodeURI =  'utf-8'

// adding data event on read stream.
readStream.on('data', (chunk) => {
/*
Adds the listener function to the end of the listeners array for the event named eventName.
No checks are made to see if the listener has already been added. Multiple calls passing the
same combination of eventNameand listener will result in the listener being added, and called, multiple times.
*/
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Stream has ended');
});

readStream.on('error', (err) =>{
  console.log('Error has occurred', err);
});