import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';
import { NSFW_CLASSES } from './nsfw_classes';

let nsfw_model = 'src/nsfwjs/model.json';

class CrypsisEngine {
  constructor() {
    this.addListeners();
  }

  addListeners() {

    chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
      if(message.msg === "image"){
        fetch('https://some-random-api.ml/pikachuimg')
              .then(response => response.text())
              .then(data => {
                let dataObj = JSON.parse(data);
                senderResponse({data: dataObj, index: message.index});
              })
              .catch(error => console.log("error", error))
          return true;  // Will respond asynchronously.
      }
    });
  }
}

let crypsis = new CrypsisEngine();
// class CrypsisEngine {

//   constructor() {
//     this.imageRequests = {};
//     this.addListeners();
//     this.loadModel();
//   }

//   addListeners() {
//     chrome.webRequest.onCompleted.addListener(req => {
//       if (req && req.tabId > 0) {
//         this.imageRequests[req.url] = this.imageRequests[req.url] || req;
//         this.analyzeImage(req.url);
//       }
//     }, { urls: ["<all_urls>"], types: ["image", "object"] });
//   }

//   async loadModel() {
//     // console.log('Loading model...');
//     let startTime = performance.now();
//     this.model = await tf.loadModel(nsfw_model);
//     this.model.predict(tf.zeros([1, 299, 299, 3])).dispose();

//     let totalTime = Math.floor(performance.now() - startTime);
//     console.log(`Model loaded and initialized in ${totalTime}ms...`);
//   }

//   async loadImage(src) {
//     return new Promise(resolve => {
//       let img = document.createElement('img');
//       img.crossOrigin = "anonymous";
//       img.onerror = function(e) {
//         resolve(null);
//       };
//       img.onload = function(e) {
//           if ((img.height && img.height > 128) || (img.width && img.width > 128)) {
//           img.width = 299;
//           img.height = 299;
//           resolve(img);
//         }
//         resolve(null);
//       }
//       img.src = src;
//     });
//   }

//   async getTopKClasses(logits, topK) {
//     let safe = true;
//     let values = await logits.data();
//     let valuesAndIndices = [];
//     for (let i = 0; i < values.length; i++) {
//       valuesAndIndices.push({value: values[i], index: i});
//     }
//     valuesAndIndices.sort((a, b) => {
//       return b.value - a.value;
//     });
//     let topkValues = new Float32Array(topK);
//     let topkIndices = new Int32Array(topK);
//     for (let i = 0; i < topK; i++) {
//       topkValues[i] = valuesAndIndices[i].value;
//       topkIndices[i] = valuesAndIndices[i].index;
//     }

//     const topClassesAndProbs = [];
//     for (let i = 0; i < topkIndices.length; i++) {
//       topClassesAndProbs.push({
//         // className: IMAGENET_CLASSES[topkIndices[i]],
//         className: NSFW_CLASSES[topkIndices[i]],
//         probability: topkValues[i]
//       })
//     }
//     if (topkIndices[0] != 2)
//       safe = false;
//     return {
//         "safe": safe,
//         "classes": topClassesAndProbs
//     };
//   }


//   async predict(imgElement) {
//     console.log('Predicting...');
//     const startTime = performance.now();
//     const logits = tf.tidy(() => {
//       const img = tf.fromPixels(imgElement).toFloat();
//       const offset = tf.scalar(127.5);
//       const normalized = img.sub(offset).div(offset);
//       const batched = normalized.reshape([1, 299, 299, 3]);
//       return this.model.predict(batched);
//     });

//     // Convert logits to probabilities and class names.
//     const predictions = await this.getTopKClasses(logits, 5);
//     const totalTime = Math.floor(performance.now() - startTime);
//     console.log(`Prediction done in ${totalTime}ms:`);
//     return predictions;
//   }

//   async analyzeImage(src) {

//     if (!this.model) {
//       setTimeout(() => { this.analyzeImage(src) }, 5000);
//       return;
//     }
//     let res;
//     let meta = this.imageRequests[src];
//     if (meta && meta.tabId) {
//       if (!meta.predictions) {
//         let startTime = performance.now();
//         console.log('loading img');
//         const img = await this.loadImage(src);
//         let totalTime = Math.floor(performance.now() - startTime);
//         console.log(`Image in ${totalTime}ms...`);
//         if (img) {
//           res = await this.predict(img);
//           meta.predictions = res.classes;
//           res["source"] = img.src;
//           console.log(res);
//         }
//       }
//       // it's not safe!
//       if (meta.predictions && res && !res.safe) {
//         chrome.tabs.sendMessage(meta.tabId, {
//           action: 'NOT_SAFE',
//           payload: meta,
//         });
//       }
//     }
//   }
// }

// let crypsis = new CrypsisEngine();

