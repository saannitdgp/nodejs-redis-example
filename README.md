**Reference:**
1. https://www.youtube.com/playlist?list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f
2. https://medium.com/developers-arena/streams-and-buffers-in-nodejs-30ff53edd50f
3. https://medium.com/developers-arena/streams-piping-and-their-error-handling-in-nodejs-c3fd818530b6
4. https://stackoverflow.com/questions/35801568/stream-highwatermark-misunderstanding
5. https://blog.logrocket.com/creating-duplex-streams-nodejs/

**NOTES:**

**Types of Streams**
In Node, there are four different types of streams:

**Readable streams** → To create a stream of data for reading (say, reading a large file in chunks).

**Writable streams** → To create a stream of data for writing (say, writing a large amount of data to a file).

**Duplex streams** → To create a stream that is both readable and writable at the same time. We can read and write to a duplex stream (say, a socket connection between a client and a server).

**Transform streams** → To create a stream that is readable and writable, but the data can be modified while reading and writing to the stream (say, compressing data by the client and server before while requesting).



**The following are the events we can listen for on a writable stream.**

**drain**

Consider we are having a scenario where the stream buffer is full and we want to know when the buffer has some space to continue writing. In such a scenario, we listen to the drain event of the stream.

The drain event triggers as soon as it will appropriate for the stream to resume writing the data.

```
myStream.on('drain', () => {
    console.log('Stream writing can be resumed now...');
});
``` 
**close**

The event is triggered as soon as the stream is closed using the stream.close() function.

**finish**

The event is triggered after the stream has completed streaming.

**pipe/unpipe**

The events are triggered as soon as the stream is piped or unpiped by a stream.

```
readStream.on('pipe', data => {
    console.log('ReadStream: Piped on Stream...\n', data);
});
readStream.on('unpipe', data => {
    console.log('ReadStream: Unpiped on Stream...\n', data);
});
writableStream.on('pipe', data => {
    console.log('WriteStream: Piped on Stream...\n', data);
});
writableStream.on('unpipe', data => {
    console.log('WriteStream: Unpiped on Stream...\n', data);
});
readStream.pipe(writableStream);
```