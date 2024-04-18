let connection;

const handleUserInput = function(data) {
  if(data === "\u0003") {           // \u0003 maps to ctrl+c input
    process.exit();
  }
  if(data === 'w' || data === 'W') {
    connection.write("Move: up");
  }
  if(data === 'a' || data === 'A') {
    connection.write("Move: left");
  }
  if(data === 's' || data === 'S') {
    connection.write("Move: down");
  }
  if(data === 'd' || data === 'D') {
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