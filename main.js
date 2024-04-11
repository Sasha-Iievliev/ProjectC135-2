status = ""

function preload(){
}

function setup(){
 canvas = createCanvas(530, 380)
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
}
 
function draw(){
image(video , 0, 0, 530, 380)
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
    object_name = document.getElementById("input_1").value;
}

function modelloaded(){
    console.log("modelloaded");
    status = true;
}