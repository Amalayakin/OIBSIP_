const video = document.getElementById("vid"); //accessing the video
let button = document.getElementsByClassName("vid-button"); //accessing the button in header


function play(){
    if(video.paused){ //checks the condition while video paused then video starts to play. condition fails it moves to pause 
        video.play();
        
    }
    else{
        video.pause();
        
        
    }
}