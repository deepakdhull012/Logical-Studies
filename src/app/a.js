
var blobUrl = 'blob:https://www.facebook.com/285ad664-4f61-4c96-9d84-e8b1f55a0838';

var xhr = new XMLHttpRequest;
xhr.responseType = 'blob';

xhr.onload = function() {
   var recoveredBlob = xhr.response;

   var reader = new FileReader;

   reader.onload = function() {
     var blobAsDataUrl = reader.result;
     window.location = blobAsDataUrl;
   };

   reader.readAsDataURL(recoveredBlob);
};

xhr.open('GET', blobUrl);
xhr.send();