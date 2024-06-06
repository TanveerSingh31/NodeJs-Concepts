// Download an image from a URL.
// Resize the image.
// Apply a filter to the image.
// Save the processed image to disk.



function downloadImage(url, callback){
    let imageData = 123;
    console.log(`download image from ${url}`);
    callback(imageData); 
}

function resizeImage(imageData, callback){
    let data =  imageData/2;
    console.log(`image resized to ${data}`);
    callback(data);
}


function filter(imageData, callback){
    console.log("filtered Image");
    callback(imageData);
}

function saveImage(image){
    console.log(`saving Image to disk ${image}`);
}



downloadImage('https://sample-image.com', (data)=>{
    resizeImage(data, (newData)=>{
        filter(newData, (image)=>{
            saveImage(image);
        })
    });
})


// OUTPUT
// console.log(`download image from ${url}`); url
// console.log(`image resized to ${data}`); -> 123/2
// console.log("filtered Image");
// console.log(`saving Image to disk ${image}`); -> 123/2