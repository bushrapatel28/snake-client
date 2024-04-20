const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, msgsObj } = require("./constants");
let connection;

const handleUserInput = function(data) {
  if(data === "\u0003") {           // \u0003 maps to ctrl+c input
    process.exit();
  }
  
  const direction = data.toLowerCase();
  const key = data;
  
  if(direction === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if(direction === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if(direction === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if(direction === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  
  connection.write(`${msgsObj[key]}`);
  
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