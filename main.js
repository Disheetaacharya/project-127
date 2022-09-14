song = "";
song_1 = "";
function preload()
{
    song = loadSound("music.mp3");
    song_1 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.position(490,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,450,400);
}