var playSong = document.getElementById("pupsong"); 

var aud = document.getElementById("pupsong");
aud.onended = function() 
{
alert("The song has ended");
window.location.reload()
};

function playAudio() { 
    playSong.play(); 
} 

function pauseAudio() { 
    playSong.pause(); 
} 

function disableBtn() {
document.getElementById("playB").disabled = true;
}

function enableBtn() {
document.getElementById("playB").disabled = false;
}

