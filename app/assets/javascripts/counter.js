$(document).ready(function(){
  var count = 10;
  var record = $('#record');

  record.on("click", function (e) {
    console.log("recorded" + count);
    Time.create([{ number: count}]);
  });

  var myVar = setInterval(function () { 
    myTimer()
  }, 1000);

  function myTimer() {
    if (count == 1) {
      count = 10;
    } else {
      count -=  1;
    }
    document.getElementById("count").innerHTML = count;
  }
});