function setup()
{
    canvas= createCanvas(400, 400);
    canvas.position(700, 100);

    video= createCapture(VIDEO);
    video.size(550, 500);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('pose net is initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }

}

function draw()
{
    background('#349ceb');
    fill('#ebc334');
    text('Szev Tayal', 200, 200);
}