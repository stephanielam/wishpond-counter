$(document).ready(function(){
  var count = 10;
  var record = $('#record');

  record.on("click", function (e) {
    console.log("recorded " + count);
      $("#list").append("<h2>"+count+"</h2>");
    $.post('/counter',{count: count},function(){
    })
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