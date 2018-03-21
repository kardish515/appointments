// Business logic:


// User interface logic:
$(document).ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    alert(name1);
  });
});
