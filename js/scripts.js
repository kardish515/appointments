// Business logic:


// User interface logic:
$(document).ready(function(){
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    alert(name1);
  });
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var description1 = $("#description1").val();
    alert(description1);
  });
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var date1 = $("#date1").val();
    alert(date1);
  });
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var startEndTime1 = $("#startEndTime1").val();
    alert(startEndTime1);
  });
});
