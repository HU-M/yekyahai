song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;


function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture =(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoint[10].score;
        scoreRightWrist = results[0].pose.keypoint[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLefWrist = " + scoreLeftWrist);
        console.log("scoreRightWrist = " + scoreRightWrist);


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        righttWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" righttWristY = "+ rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2);
    {
     circle(rightWristX,rightWristY,20);
         song1.stop();
         if(song2_status == false) {
             song2.play();
             document.getElementById("song").innerHTML = "Paying a song"}

     if(scoreRightWrist > 0.2) {
         circle(rightWristX,rightWristY,20);
         song2.stop();
         if(song1_status == false) {
             song1.play();
             document.getElementById("song").innerHTML = "Paying another song"}
         
     }

    }
}