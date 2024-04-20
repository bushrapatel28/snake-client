let connection;

const handleUserInput = function(data) {
  if(data === "\u0003") {           // \u0003 maps to ctrl+c input
    process.exit();
  }
  const direction = data.toLowerCase();
  const key = data;
  
  if(direction === 'w') {
    connection.write("Move: up");
  }
  if(direction === 'a') {
    connection.write("Move: left");
  }
  if(direction === 's') {
    connection.write("Move: down");
  }
  if(direction === 'd') {
    connection.write("Move: right");
  }

  if(key === ',') {
    connection.write("Say: Sssslurp!");
  }
  if(key === ';') {
    connection.write("Say: I see you 0_0!");
  }
  if(key === '?') {
    connection.write("Say: Where is my Treat??!!");
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