let images = document.getElementsByTagName('img');

function updateImages() {
  for(let i = 0; i < images.length; i++){
    chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
      images[index].src = data;
      images[index].srcset = data;
    });
  }
}

// when page first loads, update images.
$( document ).ready(function() {
  updateImages();
});

// the page might load new images dynamically
// so periodically update images
// TODO: only run this if new images are loaded
// and don't update images that have already been updated
var mainLoopId = setInterval(function(){
    // Do your update stuff...
    console.log("updating images...");
    updateImages();
}, 5000);
// function getImages() {
//   return new Promise((resolve, reject) => {
//     let images = $("img");
//     resolve(images);
//   })
// }

// getImages().then(images => {
//   console.log("src list of images:");
//   console.log(images)
//   // Load the model.
//   mobilenet.load().then(model => {
//     // Classify each image.
//     for (let i = 0; i < images.length; i++) {
//       model.classify(images[i]).then(predictions => {
//         console.log('Predictions: ');
//         console.log(predictions);
//         // console.log(predictions.length)
//         // let match = false;
//         let match = true;
//         for (let i = 0; i < predictions.length; i++) {
//           // if (predictions[i].className.match(/cat/g) && predictions[i].probability >= 0.10) {
//             match = true;
//             // if (predictions[i].className.match(/cat/g)) {
//               // console.log(images[i][0].src)
//               // console.log(images[0])
//               // // images[i].attr("src", "./images/dog.jpg")
//               // // images[i].src = "./images/dog.jpg";
//               // images[i].remove();
//               // let temp = $("img").attr("src", "./images/dog.jpg")
//               // images[i].append(temp)
//           // }
//         }
//         if (match) {

//           chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
//             images[i].src = data.link;
//           });

//           // console.log(images[i].src);
//           // images[i].src = baseUrl;
//           // console.log(images[i].src);
//           // var img = new Image(),
//           // canvas = document.createElement("canvas"),
//           // ctx = canvas.getContext("2d"),
//           // src = "./images/dog.jpg";
//           // img.onload = function() {
//           //     canvas.width = img.width;
//           //     canvas.height = img.height;
//           //     ctx.drawImage(img, 0, 0);
//           //     // console.log(canvas.toDataUrl());
//           // }
//           // // check if //domain.com or http://domain.com is a different origin
//           // if (/^([\w]+\:)?\/\//.test(src) && src.indexOf(location.host) === -1) {
//           //   img.crossOrigin = "anonymous"; // or "use-credentials"
//           // }
//           // img.src = src;
//           // images[i] = img;

//         }
//       });
//     }
//   });
// })