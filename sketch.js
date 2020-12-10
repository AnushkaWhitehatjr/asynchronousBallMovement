var ball;
var db;
var pos;
var pos2;

function setup(){
    createCanvas(500,500);
    
    db = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    pos = db.ref("ball/position");
    pos.on("value",readPos,showError);
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW))
    { 
        writePos(-1,0); 
    } 
    else if(keyDown(RIGHT_ARROW))
    { 
        writePos(1,0); 
    } 
    else if(keyDown(UP_ARROW))
    { 
        writePos(0,-1); 
    } 
    else if(keyDown(DOWN_ARROW))
    { 
        writePos(0,+1); 
    }

    drawSprites();
}

function readPos(Hello)
{
    pos2 = Hello.val();
    ball.x = pos2.x;
    ball.y = pos2.y;
}

function writePos(a,b)
{
    database.ref("ball/position").set({
        'x':pos2.x+a,
        'y':pos2.y+b
    })
}

function showError(){
    console.log("Your database is not connected");
}
