// image to change to
// TODO: make a list of images and maybe randomize which image is chosen
// TODO: have images stored locally instead of requesting it from imgur
const baseUrl = "https://i.imgur.com/QRPzNTS.jpg";

let hello = "hello";
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    senderResponse({data: baseUrl, index: message.index});
    // fetch('https://some-random-api.ml/pikachuimg')
    //       .then(response => response.text())
    //       .then(data => {
    //         let dataObj = JSON.parse(data);
    //         senderResponse({data: dataObj, index: message.index});
    //       })
    //       .catch(error => console.log("error", error))
      return true;  // Will respond asynchronously.
  }
});