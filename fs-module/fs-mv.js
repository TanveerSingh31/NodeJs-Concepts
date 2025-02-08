const { log } = require('node:console');
const fs = require('node:fs');



// Makes new folder

fs.access( // check if folder already exists
    './Files2', fs.constants.F_OK, (err)=> {
        if(err) { // if doesnot exists creates new folder
            fs.mkdir('./Files2', (err)=> {
                console.log(err);
                if(!err) console.log('made new directory');
            })
        }
        else console.log('folder already exists');
        
    }
)

// Moves files from source path to destination path
fs.rename('./Files/file1.txt', './Files2/file-2.txt', (err) => {
    console.log(err);
    if(!err) console.log('file moved');
})