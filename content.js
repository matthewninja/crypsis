let tensor_flow = document.createElement('script');
tensor_flow.src = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js';
document.getElementsByTagName("head")[0].appendChild(tensor_flow);

// Load the MobileNet model.
let model = document.createElement('script');
model.src = 'https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0';
document.getElementsByTagName("head")[0].appendChild(model);

// get all of the images on the page
console.log("src list of images:");
let images = document.getElementsByTagName('img'); 
let srcList = [];
for(let i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}
// console.log(srcList);
const img = document.getElementById('img');
console.log("HEllo")

// Load the model.
// mobilenet.load().then(model => {
//   // Classify the image.
//   model.classify(img).then(predictions => {
//     console.log('Predictions: ');
//     console.log(predictions);
//   });
// });