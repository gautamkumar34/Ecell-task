console.log("welcome to Melody");

let audioElement = new Audio('song 1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mybar = document.getElementById('mybar');
let songs = [
    {songName: "song 1", filePath: "Melody images/song 1.mp3"}
];

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update the progress bar here if needed
});

mybar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
});

audioElement.src = songs[0].filePath;
