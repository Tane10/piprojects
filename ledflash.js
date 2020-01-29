const five = require("johnny-five");
const raspi = require("raspi").RaspiIO;

var board = new five.Board({
  io: new raspi()
});

board.on("ready", () => {
    var led = new five.led("p1-13")
    led.bink()
});


// board.on("ready", function() {
//     var led = new five.Led("P1-13");
//     led.blink();
//   });