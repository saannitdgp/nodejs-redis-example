const {Transform} = require('stream');
/**
 * @description: https://developer.mozilla.org/en-US/docs/Web/API/TransformStream
 */
class ReplaceTxt extends Transform{

    constructor(chr) {
        super();
        this.replaceChar = chr;
    }

    _transform(chunk, encoding, callback) {
        const transformChunk = chunk.toString().replace(/[a-z]/g, this.replaceChar);
        this.push(transformChunk);
        callback();
    }

    _flush(callback){
       console.log('more stuff us being pass through');
       callback();
    }
}

const xStream = new ReplaceTxt('x');

process.stdin.pipe(xStream).pipe(process.stdout);