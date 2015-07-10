var Gpio = require('onoff').Gpio;
var led = new Gpio(17, 'out');
 
function exit() {
  led.unexport();
  process.exit();
}
 
led.writeSync(0);
 
process.on('SIGINT', exit);
