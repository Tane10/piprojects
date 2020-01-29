const five = require("johnny-five");
const raspi = require("raspi");
const gpio = require("raspi-gpio");
const led = require("raspi-led")

var board = new five.Board();

board.on("ready", () => {
    raspi.init(() => {
        const statusLed = new led.LED(7)
      
        // Flash the LED twice a second
        setInterval(() => {
          if (statusLed.read() == led.ON) {
            statusLed.write(led.OFF); // Turn off the status LED
          } else {
            statusLed.write(led.ON); // Turn on the status LED
          }
        }, 500);
      });
});


