let connection;

const handleUserInput = function(data) {
  if(data === "\u0003") {           // \u0003 maps to ctrl+c input
    process.exit();
  }
  if(data === "\u0077" || data === "\u0057") {
    connection.write("Move: up");
  }
  if(data === "\u0061" || data === "\u0041") {
    connection.write("Move: left");
  }
  if(data === "\u0073" || data === "\u0053") {
    connection.write("Move: down");
  }
  if(data === "\u0064" || data === "\u0044") {
    connection.write("Move: right");
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);      //calling the handleUserInput as a callback for "data"

  return stdin;
};

module.exports = setupInput;