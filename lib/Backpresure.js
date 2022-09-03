const {createReadStream, createWriteStream, read} = require('fs');



/**
 * @description
 * If the highWaterMark limit is reached, the stream cannot buffer anymore,
 * so the #write method returns false to let you know that what you tried to write won't be write (never).
 * 
 * This is false, data is still buffered, the stream doesn't lose it. But you should stop writing at this point.
 * This is to allow backpressure to propagate.
 */
/**
 * BackPressure is used to optimize memory usage. If u want to avoid back pressure add property 
 */

const readStream = createReadStream('./test.json') // encodeURI =  'utf-8'

// used to write data on destination
const writeStream = createWriteStream('./copy.json', {
    highWaterMark:12000
});

// adding data event on read stream.
readStream.on('data', (chunk) => {
  /**
   * This return value is strictly advisory. You MAY continue to write, even if it returns false.
   * However, writes will be buffered in memory, so it is best not to do this excessively Instead,
   * wait for the 'drain' event before writing more data.
   */
   const result = writeStream.write(chunk);

   // result => true or false => false => host can not take more data.

   if(!result) {
       console.log('Back pressure');
       readStream.pause();
   }
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
});

writeStream.on('drain', () => {
    console.log('Drained');
    readStream.resume();
})