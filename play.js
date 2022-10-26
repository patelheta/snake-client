const connect = require("./client");
const { setupInput } = require("./input");

// establishes a connection with the game server
console.log("Connecting ...");
let conn = connect();
// setup interface to handle user input from stdin
setupInput(conn);
