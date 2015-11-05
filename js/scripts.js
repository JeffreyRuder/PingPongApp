var pingPongOutput = function(inputNumber) {
  if(inputNumber % 3 === 0) {
    return "ping";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  } else {
    return inputNumber;
  }
};
