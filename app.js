$(function() {
  $("#search").submit(function(event){
     event.preventDefault();
     if($("#loadText").val().trim().length > 0){
       var d = new Date();
       var n = d.getSeconds();
       $("#page").append('<div>'+$("#loadText").val()+' -'+n+'<div>');
       $("#loadText").val("");
       $("#loadText").focus();
     }

  });
});
