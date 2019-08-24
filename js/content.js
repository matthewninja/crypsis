

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
        console.log(predictions.length)
        let match = false;
        for (let i = 0; i < predictions.length; i++) {
          // if (predictions[i].className.match(/cat/g) && predictions[i].probability >= 0.40) {
            match = true;
            if (predictions[i].className.match(/cat/g)) {
              // console.log(images[i][0].src)
              // console.log(images[0])
              // // images[i].attr("src", "./images/dog.jpg")
              // // images[i].src = "./images/dog.jpg";
              // images[i].remove();
              // let temp = $("img").attr("src", "./images/dog.jpg")
              // images[i].append(temp)
          }
        }
        if (match) {
          // images[i].src = "./images/dog.jpg";
          var img = new Image(),
          canvas = document.createElement("canvas"),
          ctx = canvas.getContext("2d"),
          src = "./images/dog.jpg";
          img.onload = function() {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              // console.log(canvas.toDataUrl());
          }
          // check if //domain.com or http://domain.com is a different origin
          if (/^([\w]+\:)?\/\//.test(src) && src.indexOf(location.host) === -1) {
            img.crossOrigin = "anonymous"; // or "use-credentials"
          }
          img.src = src;
          images[i] = img;

        }
      });
    }
  });
})