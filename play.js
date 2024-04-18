const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

const conObj = connect();
setupInput(conObj);