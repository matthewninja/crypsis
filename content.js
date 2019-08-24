let tensor_flow = document.createElement('script');
tensor_flow.src = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js';
document.getElementsByTagName("head")[0].appendChild(tensor_flow);

// get all of the images on the page
console.log("src list of images:");
let images = document.getElementsByTagName('img'); 
let srcList = [];
for(let i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}
console.log(srcList);