var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem1421'; // fill in your serial port name here
var stringFromSerial;  // for incoming serial data

var reed1 = 1; reed2 = 1; reed3 = 1; reed4 = 1; reed5 = 1; reed6 = 1;
var reed1Prev = 1;
var fr = 2;
var story1 = [];
var story2 = [];
var story3 = [];
var story4 = [];
var story5 = [];
var story6 = [];


function preload() {
  soundFormats('mp3');
  SOUND1 = loadSound('sounds/harp1.mp3');
  SOUND2 = loadSound('sounds/harp2.mp3');
  SOUND3 = loadSound('sounds/harp3.mp3');
  SOUND4 = loadSound('sounds/harp4.mp3');
  SOUND5 = loadSound('sounds/harp5.mp3');
  SOUND6 = loadSound('sounds/harp6.mp3');
  
  story1[0] = loadImage('photos/Story1.jpg');
  story1[1] = loadImage('photos/Story2.jpg');
  story1[2] = loadImage('photos/Story3.jpg');
  story1[3] = loadImage('photos/Story4.jpg');
  
  story2[0] = loadImage('photos/Story5.jpg');
  story2[1] = loadImage('photos/Story6.jpg');
  
  story3[0] = loadImage('photos/Story7.jpg');
  
  story4[0] = loadImage('photos/Story8.jpg');
  story4[1] = loadImage('photos/Story9.jpg');
  story4[2] = loadImage('photos/Story10.jpg');
  
  story5[0] = loadImage('photos/Story11.jpg');
  
  story6[0] = loadImage('photos/Story12.jpg');
  story6[1] = loadImage('photos/Story13.jpg');
}
  

function setup() {
 createCanvas(1200, 1200);          // make the canvas
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('data', serialEvent);  // callback for when new data arrives

 serial.list(); // list the serial ports
 serial.open(portName);           // open a serial port
  imageMode(CENTER);
}


function draw() {
  frameRate(fr);
  background('black');
  text("incoming value: " + reed1, 30, 30);
  text("incoming value: " + reed2, 30, 60);
  Sound1();
  Sound2();
  Sound3();
  Sound4();
  Sound5();
  Sound6();
 
   

  
}

// function Sound1() {
//   if (reed1Prev != reed1) {
//   SOUND1.play();
//   let imgs1 = random(story1);
//     image(imgs1, windowWidth/2, windowHeight/2); 
//   } else { 
//   SOUND1.stop() 
//   }
// }

function Sound1() {
  if (reed1 == 0) {
    SOUND1.play();
    let imgs1 = random(story1);
image(imgs1, windowWidth/2, windowHeight/2);
  }
}

function Sound2() {
  if (reed2 == 0) {
  SOUND2.play();
  let imgs2 = random(story2);
    image(imgs2, windowWidth/2, windowHeight/2);
  }
}

function Sound3() {
  if (reed3 == 0) {
  SOUND3.play();
  let imgs3 = random(story3);
    image(imgs3, windowWidth/2, windowHeight/2);  
  }
}

function Sound4() {
  if (reed4 == 0) {
  SOUND4.play();
  let imgs4 = random(story4);
    image(imgs4, windowWidth/2, windowHeight/2);  
  }
}

function Sound5() {
  if (reed5 == 0) {
  SOUND5.play();
  let imgs5 = random(story5);
    image(imgs5, windowWidth/2, windowHeight/2);
  }
}

function Sound6() {
  if (reed6 == 0) {
  SOUND6.play();
  let imgs6 = random(story6);
    image(imgs6, windowWidth/2, windowHeight/2);  
  }
}

function serialEvent() {
  var stringFromSerial = serial.readLine();    // reads everything till the new line charecter
  if (stringFromSerial.length > 0) {           
    var trimmedString = trim(stringFromSerial);  // get rid of all white space
    var myArray = split(trimmedString, ",")      // splits the string into an array on commas
    reed1 = Number(myArray[0]);  
    reed2 = Number(myArray[1]);
    reed3 = Number(myArray[2]);
    reed4 = Number(myArray[3]);
    reed5 = Number(myArray[4]);
    reed6 = Number(myArray[5]);
  }
}



function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

