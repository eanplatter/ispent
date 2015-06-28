console.log('the count');
$(document).ready(function() {
  window.scrollTo(0,1);
  var amount;
  var count = new Firebase("https://tbc.firebaseio.com/");
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
    if(countVal < 10000) {
      countVal = countVal.toPrecision(4);
    }
    count.set({count: countVal});
    $("#countValue").val("");
  });

  $("#iSpentSubmit").on("click", function() {
    var iSpentVal = $("#iSpentValue").val();
    iSpentVal = parseFloat(iSpentVal);
    amount = amount - iSpentVal;
    if(amount < 10000) {
      amount = amount.toPrecision(4);
    }
    count.set({count: amount});
    $("#iSpentValue").val("");
  });
});
