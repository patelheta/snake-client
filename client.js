const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: HRP");
  });
  return conn;
};
module.exports = connect;


// let moves = ["up", "up", "left", "left", "left", "up", "up", "right", "right", "right", "right", "down", "down"];
// let delay = 1000;
// for (let item of moves) {
//   setTimeout(() => {
//     conn.write(`Move: ${item}`);
//   }, delay);
//   delay += 1000;
// }

// setInterval(() => {
//   conn.write("Move: up");
// }, 2000);