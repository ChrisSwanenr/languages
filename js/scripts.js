$(document).ready(function(){
  var add = function(q1Input, q2Input, q3Input, q4Input, q5Input) {
    return q1Input + q2Input + q3Input + q4Input + q5Input;

  }

$('#quizbtn').submit(function(event) {
  var q1Input = parseInt($('#q1').val());
  var q2Input = parseInt($('#q2').val());
  var q3Input = parseInt($('#q3').val());
  var q4Input = parseInt($('#q4').val());
  var q4Input = parseInt($('#q5').val());

  var result = add(q1Input, q2Input, q3Input, q4Input, q5Input)
  $('#test').hide();
  if (result <= 5) {
    $('#testresult').show();
    $('#result').text("C#");
  }
  event.preventDefault();
});
