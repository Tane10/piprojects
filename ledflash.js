var five = require("johnny-five");
var Raspi = require("raspi-io").RaspiIO;

var board = new five.Board({
  io: new Raspi()
});

// it works NOTE: for a led to work it have to be grounded

 board.on("ready", function() {
     var led = new five.Led("P1-13");
     led.blink();
  });

