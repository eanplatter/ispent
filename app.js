console.log('the count');
$(document).ready(function() {
  var amount;
  var count = new Firebase("https://thecount.firebaseio.com/");
  count.child("count").on("value", function(snapshot) {
    amount = snapshot.val();
    $('#count').html("<h1>" + snapshot.val() + "</h1>");
  });

  $("#reset").on('click', function() {
    count.set({count: 0});
  });

  $("#setCount").on('click', function() {
    var countVal = $("#countValue").val();
    countVal = parseFloat(countVal);
    count.set({count: countVal});
    $("#countValue").val("");
  });

  $("#iSpentSubmit").on("click", function() {
    var iSpentVal = $("#iSpentValue").val();
    iSpentVal = parseFloat(iSpentVal);
    amount = amount - iSpentVal;
    count.set({count: amount});
    $("#iSpentValue").val("");
  });
});
