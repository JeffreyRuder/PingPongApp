var validInput = function(userInput) {
  if (parseInt(userInput) > 0) {
    return true;
  } else {
    return false;
  };
};

var pingPongOutput = function(inputNumber) {
  if (inputNumber % 15 === 0) {
    return "pingpong";
  } else if (inputNumber % 3 === 0) {
    return "ping";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  } else {
    return inputNumber;
  }
};

//Process user input and use jQuery to modify DOM

$(document).ready(function() {
  $("#go-button").click(function() {
    $("#output").empty();
    $fieldInput = $("#pingPongInputField").val();
    if (!(validInput($fieldInput))) {
      $("#output").append("<br><p>Please enter a positive integer to Ping Pong.</p>");
    } else {
      $pingPongNumber = parseInt($("#pingPongInputField").val());
      $("#output").append("<br><ul>");
      for (i = 1; i <= $pingPongNumber; i++) {
        $("#output").append("<li>" + pingPongOutput(i) + "</li>");
      };
      $("#output").append("</ul>");
    };
  });
});
