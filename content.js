console.log("src list of images:");
var images = document.getElementsByTagName('img'); 
var srcList = [];
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}
console.log(srcList);