function getImages() {
  return new Promise((resolve, reject) => {
    let images = $("img");
    let srcList = [];
    for (let i = 0; i < images.length; i++) {
      srcList.push(images[i].src);
    }
    resolve(images);
  })
}

getImages().then((images) => {
  console.log("src list of images:");
  console.log(images)
  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(images[0]).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
    });
  });
})


