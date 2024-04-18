const handleUserInput = function(data) {
  if(data === "\u0003") {           // \u0003 maps to ctrl+c input
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);      //calling the handleUserInput as a callback for "data"

  return stdin;
};

module.exports = setupInput;