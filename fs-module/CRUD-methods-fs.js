const fs = require('fs');

// This will add access of read-write to file
fs.chmod('./Files/new-file', 0o600, (err)=>{
    if(!err) console.log('Read permission Set');
});


// CRUD Operations using fs module

// 1. CREATE / WRITE Files

// creates file , if not already exists, or adds to existing file, but clears existing data of file!
fs.writeFile('./Files/new-file', 'This is text added via write file', (err)=>{
    if(!err) console.log('written to file!');
});
let writeStream = fs.createWriteStream('./Files/new-file');
writeStream.write('Test data from write-stream', (err)=>{
    if(!err) console.log('data written to file using stream');
});



// 2. UPDATE Files / Append files
// appendFile - doesnot clear existing data, appends new data to existing data in file
fs.appendFile('./Files/new-file', '\n Appending some moree data', err => {if(!err) console.log('appended data to file')});



// 3. Read
// fs.readFile / fs.createReadStream


// 4. Delete File / Delete data from file
fs.rm('./Files/new-file', (err) => { if(!err) console.log('file deleted sucessfully')});

// 5. Deletes content from file
fs.truncate('./Files/file1.txt', 10, (err)=>{ if(!err) console.log('file truncated')});

// 10 represents the remaining bytes you want to remain , after truncation