const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, msgsObj } = require("./constants");
let connection;
let dir = "left";              //Initial direction of the snake

const handleUserInput = function(data) {
  const direction = data.toLowerCase();

  if (data === "\u0003") {           // \u0003 maps to ctrl+c input
    process.exit();
  }

  if (direction === MOVE_UP_KEY) {
    connection.write("Move: up");
    dir = "up";
  }

  if (direction === MOVE_LEFT_KEY) {
    connection.write("Move: left");
    dir = "left";
  }

  if (direction === MOVE_DOWN_KEY) {
    connection.write("Move: down");
    dir = "down";
  }

  if (direction === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
    dir = "right";
  }
};

const handleUserMsgs = function(key) {
  const keys = Object.keys(msgsObj);
  if (keys.includes(key)) {
    connection.write(`${msgsObj[key]}`);
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setEncoding("utf8");
  stdin.resume();
 
  setInterval(() => {
    connection.write(`Move: ${dir}`);     //Moves the snake every 75 ms in the direction specified
  }, 75);

  stdin.on("data", handleUserInput);      //calling the handleUserInput as a callback for "data"
  
  stdin.on("data", handleUserMsgs);        //calling the handleUserMsgs as a callback for "data"
  
  stdin.setRawMode(true);

  return stdin;
};

module.exports = setupInput;