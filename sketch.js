const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bg;
var response, responseJSON, datetime, hour;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(900,650);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    if (backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    textSize(30);
    fill("black");
    stroke("black");
    strokeWeight(2);
    text("TIME: " + hour + ":00", 380, 250);
}

async function getBackgroundImg(){
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseJson = await response.json();
    datetime = responseJson.datetime;
    hour = datetime.slice(11,13);

    if (hour >= 4 && hour <= 6) {
        bg = "sunrise1.png";
    } else if (hour >= 6 && hour <= 8) {
        bg = "sunrise2.png";
    } else if (hour >= 8 && hour <= 10) {
        bg = "sunrise3.png";
    } else if (hour >= 10 && hour <= 12) {
        bg = "sunrise4.png";
    } else if (hour >= 12 && hour <= 14) {
        bg = "sunrise5.png";
    } else if (hour >= 14 && hour <= 18) {
        bg = "sunrise6.png";
    } else if (hour >= 18 && hour <= 20) {
        bg = "sunset7.png";
    } else if (hour >= 20 && hour <= 22) {
        bg = "sunset8.png";
    } else if (hour >= 22 && hour <= 0) {
        bg = "sunset9.png";
    } else if (hour >= 0 && hour <= 2) {
        bg = "sunset10.png";
    } else if (hour >= 2 && hour <= 4) {
        bg = "sunset11.png";
    } else {
        bg = "sunset12.png";
    }
    
    backgroundImg = loadImage(bg);
}