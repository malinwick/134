
var output = document.getElementById('oversikt');
  // NOTE: første konstruktør
  const xhr = new XMLHttpRequest();
  xhr.open(method,url);
  xhr.responseType ="json";
  var url1 = "http://wildboy.uib.no/~tpe056/folk/104857.json";
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.response);
      xhr.send();
    }
  };

// NOTE: andre konstruktør
const sendData = () => {
    sendHttpRequest("POST" , "http://wildboy.uib.no/~tpe056/folk/104857.json").
    then(responseData => {
    console.log(responseData);
  })
  .catch(err => {
    console.log(err);
  });
};
