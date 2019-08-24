function getImages() {
  return new Promise((resolve, reject) => {
    let images = $("img");
    resolve(images);
  })
}

getImages().then(images => {
  console.log("src list of images:");
  console.log(images)
  // Load the model.
  mobilenet.load().then(model => {
    // Classify each image.
    for (let i = 0; i < images.length; i++) {
      model.classify(images[i]).then(predictions => {
        console.log('Predictions: ');
        console.log(predictions);
        for (let i = 0; i < predictions.length; i++) {
          if (predictions[i].className.match(/cat/g) && predictions[i].probability >= 0.50) {
            images[i].src = "./images/dog.jpg";
          }
        }
      });
    }
  });
})