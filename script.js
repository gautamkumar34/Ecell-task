console.log("welcome to Melody")
let audioelement = new Audio('song 1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mybar = document.getElementById('mybar');
let songs =[
    {songName:"song 1", filePath = ""}
]
masterPlay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
    }

})
mybar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})