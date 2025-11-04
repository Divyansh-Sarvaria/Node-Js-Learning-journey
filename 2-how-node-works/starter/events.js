const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();
myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});
myEmitter.on("newSale", () => {
  console.log("costumer name :jonas");
});
myEmitter.on("newSale", (stock) => {
  console.log(`there are ${stock} left in stock`);
});
myEmitter.emit("newSale", 9);

////////////////////////////

const server = http.createServer();
server.on("request", (req, res) => {
  console.log("request recived");
  res.end("reqest recived");
});
server.on("request", (req, res) => {
  console.log("another request recived");
});
server.on("close", () => {
  console.log("closed");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request");
});
