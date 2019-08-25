var imageMeta = {};
var flippers = [];

const crypsis = (payload) => {
  const images = document.getElementsByTagName('img');
  for (let item of images) {
    if (item.src === payload.url) {
        item.src = 'https://i.imgur.com/ZccahuC.jpg';
        item.srcset = 'https://i.imgur.com/ZccahuC.jpg';
        // delete keys[u];
        // delete imageMeta[url];
      
    }
  }
}

  // const keys = Object.keys(imageMeta);
  // console.log("keys length: ", keys.length);
  // console.log("images length: ", images.length);
  // for(u = 0; u < keys.length; u++) {
  //   var url = keys[u];
  //   var meta = imageMeta[url];
  //   // for (i = 0; i < images.length; i++) {
  //   //   var img = images[i];
  //   //   console.log(img);
  //   //   console.log(payload);
  //   //   // if (img.src === payload.url) {
  //   //   //   console.log("a4");
  //   //   //   // console.log(img.src + `:\n\n${img.title}\n\n` + JSON.stringify(meta.predictions));
  //   //   //   img.src = 'https://i.imgur.com/ZccahuC.jpg';
  //   //   //   img.srcset = 'https://i.imgur.com/ZccahuC.jpg';
  //   //   //   // delete keys[u];
  //   //   //   // delete imageMeta[url];
  //   //   // }
  //   // }
  // }


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.payload && message.action === 'NOT_SAFE') {
    const { payload } = message;
    if (payload && payload.url) {
      imageMeta[payload.url] = payload;
      crypsis(payload);

      // const images = document.getElementsByTagName('img');
      // for (let item of images) {

          // console.log(item.id);
        
      // }
      // console.log("a2");
      // for (u = 0; u < keys.length; u++) {
      //   console.log("a1");
      //   var url = keys[u];
      //   var meta2 = imageMeta[url];
      //       for (i = 0; i < images.length; i++) {
      //         var img = images[i];
      //         if (img.src === meta2.url) {
      //           console.log("a3");
      //             img.src = 'https://i.imgur.com/DZqeyOO.jpg';
      //             img.srcset = 'https://i.imgur.com/DZqeyOO.jpg';
                
      //           // delete keys[u];
      //           // delete imageMeta[url];
      //         }
      //       }
      // }

    }
  }
});

window.addEventListener('load', crypsis, false);


// let processedImages = [];
// // let safeSrc = ["./images/cat1.jpg", "./images/cat2.jpg", "./images/cat3.jpg"];

// function updateImages() {
//   let images = $("img");
//   // images.fadeToggle();
//   let imagesToUpdate = [];
//   let imagesToCheck = [];
//   for (let i = 0; i < images.length; i++) {
//     let isSafe = false;
//     let done = false;
//     for (let j = 0; j < processedImages.length && !done; j++) {
//       if (images[i] == processedImages[j]) {
//         isSafe = true;
//         done = true;
//       }
//     }
//     if (!isSafe) {
//       processedImages.push(images[i]);
//       images[i].class = "unsafe"
//       imagesToUpdate.push(images[i]);
//       imagesToCheck.push(images[i]);
//       // console.log(images[i].class);
//     }
    
//     // console.log(images)
    
//     // console.log($(".unsafe"))
//     // console.log($(".unsafe"))
//     // $(".unsafe").fadeOut();
//   }
//   $(".unsafe").fadeToggle();
//   for (let i = 0; i < imagesToUpdate.length; i++) {
//     // console.log(imagesToUpdate[i].src);
//     imagesToUpdate[i].src = "./images/question.jpg";
//   }

//   mobilenet.load().then(model => {
//     for (let i = 0; i < imagesToCheck.length; i++) {
//       // console.log("hello")
//       model.classify(images[i]).then(predictions => {
//         console.log("Predictions: ", predictions);
//         let match = false;
//         for (let i = 0; i < predictions.length; i++) {
//           if (predictions[i].className.match(/cat/g) && predictions[i].probability >= 0.10) {
//             match = true;
//           }
//         }
//         if (match) {
//           chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
//             // imagesToUpdate[index].style.opacity = 0;
//             // imagesToUpdate[index].style.webkitTransition = "opacity 3s ease-in-out";
//             // imagesToUpdate[index].style.mozTransition = "opacity 3s ease-in-out";
//             // imagesToUpdate[index].style.oTransition = "opacity 3s ease-in-out";
//             // imagesToUpdate[index].style.transition = "opacity 3s ease-in-out";
//             // imagesToUpdate[index].fadeToggle();
//             imagesToCheck[index].src = data;
//             imagesToCheck[index].srcset = data;
//             // imagesToUpdate[index].fadeToggle();
//             // imagesToUpdate[index].style.opacity = 1;
//             // console.log(imagesToUpdate[index])
//             // imagesToUpdate[index].class = "safe";
//             // $(".safe").fadeIn();
            
//           });
//         }
//       });
//     };
//     // images.fadeToggle();
//   });
// }

// // when page first loads, update images.
// $( document ).ready(function() {
//   updateImages();
// });

// // the page might load new images dynamically
// // so periodically update images
// // TODO: only run this if new images are loaded
// // and don't update images that have already been updated
// var mainLoopId = setInterval(function(){
//     console.log("Updating images...");
//     updateImages();
// }, 5000);