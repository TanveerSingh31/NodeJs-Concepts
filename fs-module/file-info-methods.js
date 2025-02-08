const fs = require('node:fs');

// 1. To find the stats of file. (async method)
fs.stat('./Files/large_text_file_100mb.txt', (err, data)=> console.log(data));



// 2. Set or Update permissions of a file
// 0o600 - read-write
// 0o400 - read-only

fs.chmod('./Files/large_text_file_100mb.txt', 0o400, (err)=>{
    if(!err) console.log('Read permission Set');
});



// 3. To check if file exists or not (async method)
fs.access('./Files/large_text_file_100mb.txt', 
    fs.constants.W_OK, // Checks wheter the file has given permission (WRITE) , but we have set permission as read only  we get error
    (err) => {
        if(err) console.log('file doesnot exists , or doesnot have the following permission');
        else console.log('file exists');
    }
);

