const fs = require('node:fs');


// creates a new file , if it doesnot exist.
fs.writeFile("./Files/file3.txt", 'Tanveer Singh', (err) => {
    console.log(err);
    console.log("written to file");    
})