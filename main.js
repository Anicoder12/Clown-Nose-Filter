nose_x = ""
nose_y = ""
function preload() {
clown_n = loadImage("clown_nose.png")
}

function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO);//create capture is a function which access the webcam
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);//initialization of posenet model
    poseNet.on('pose',gotPoses);//execution of posenet model
}

function modelloaded() {
    console.log('Posenet model has been intialized.');
}

function draw() {
image(video,0,0,300,300);//video is the variable which contains webcam live view
fill("red");
stroke("red");
//circle(nose_x, nose_y, 20);
image(clown_n, nose_x-24, nose_y-20, 60, 60);
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}

function take_snapshot() {
    save("clownnose_snapshot.jpg")
}