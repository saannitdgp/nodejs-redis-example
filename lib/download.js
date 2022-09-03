/**
 * @Reference: https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries
 * 
 */

 const http = require('https'); // or 'https' for https:// URLs
 const fs = require('fs');
 
 const file = fs.createWriteStream("file.mov");
 const request = http.get("https://www.youtube.com/watch?v=aVSf0b1jVKk", function(response) {
    response.pipe(file);
 
    // after download completed close filestream
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
 });
 