let processedImages = [];
let safeSrc = ["./images/cat1.jpg", "./images/cat2.jpg", "./images/cat3.jpg"];

function updateImages() {
  let images = $("img");
  let imagesToUpdate = [];
  for (let i = 0; i < images.length; i++) {
    let isSafe = false;
    let done = false;
    for (let j = 0; j < processedImages.length && !done; j++) {
      if (images[i] == processedImages[j]) {
        isSafe = true;
        done = true;
      }
    }
    if (!isSafe) {
      processedImages.push(images[i]);
      imagesToUpdate.push(images[i]);
    }
  }

  mobilenet.load().then(model => {
    for (let i = 0; i < imagesToUpdate.length; i++) {
      model.classify(images[i]).then(predictions => {
        console.log("Predictions: ", predictions);
        let match = false;
        for (let i = 0; i < predictions.length; i++) {
          if (predictions[i].className.match(/cat/g) && predictions[i].probability >= 0.10) {
            match = true;
          }
        }
        if (match) {
          chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
            imagesToUpdate[index].src = data;
            imagesToUpdate[index].srcset = data;
          });
        }
      });
    };
  });
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
    console.log("Updating images...");
    updateImages();
}, 5000);
