//[STEP 1]: Start with document ready
$(document).ready(function () {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + "https://ipapi.co/json")
      .then(response => response.json())
      .then(function (data){
        console.log(data)
    });
  })