chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  console.log("hiya");
  if(message.msg === "image"){
    console.log("hiya2");
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