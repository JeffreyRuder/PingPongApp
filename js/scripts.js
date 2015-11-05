var validInput = function(input) {
  if (parseInt(input) > 0) {
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
