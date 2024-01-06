x = 0;
y = 0;
draw_apple = ""

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
      if(content =="apple")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = to_number + "Apples drawn"; 
        draw_apple = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "apple is drawn. ";
    draw_apple = ""
  }

}

to_number = Number(content);
if(Number.isInteger(to_number))
screen_width = window.innerWidth;









