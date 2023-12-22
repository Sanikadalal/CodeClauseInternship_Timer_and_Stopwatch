let resetButton = document.querySelector(".btn-reset")
let playButton = document.querySelector(".btn-play")
let lapButton = document.querySelector(".btn-lap")
let second = document.querySelector(".sec")
let milisecond = document.querySelector(".msec")
let minute = document.querySelector(".minute")
let laps = document.querySelector(".laps")
let bg =document.querySelector(".outer-circle")

let isplay =false
let secCounter = 0;
let sec;
let milsecCounter = 0;
let milisec;
let minuteCounter = 0;
let min;
let isReset =false
let lapitem = 0

const toggel =() =>{
    resetButton.classList.remove("hidden")
    lapButton.classList.remove("hidden")
}

const play = () =>{
    if(!isplay && !isReset){
        playButton.innerHTML="Pause"
        bg.classList.add("animation-bg")
       
        min = setInterval(()=>{
            ++minuteCounter;
            let m = minuteCounter < 10 ? "0" +  minuteCounter: minuteCounter;
           minute.innerHTML=`${m} :`
        },60*1000);

        sec = setInterval(()=> {
            if(secCounter===60){
                secCounter = 0
            }
            ++secCounter
            let s = secCounter < 10 ? "0" + secCounter : secCounter;
            second.innerHTML= `&nbsp${s} :` },1000);

        milisec = setInterval(()=>{
            if(milsecCounter===100){
                milsecCounter=0;
            }
            milisecond.innerHTML=`&nbsp${++milsecCounter}`},10)
        isplay=true;
        isReset=true;
    }else{
        playButton.innerHTML="Play"
        clearInterval(sec)
        clearInterval(milisec)
        clearInterval(min)
        isplay=false;
        isReset=false;
        bg.classList.remove("animation-bg")

    }

    toggel();
}

const reset =()=>{
    isReset=true
    play();
    secCounter=0
    minuteCounter=0
    resetButton.classList.add("hidden")
    lapButton.classList.add("hidden")
    second.innerHTML="&nbsp;00 :"
    milisecond.innerHTML="&nbsp;00"
    minute.innerHTML="00 :"
    laps.innerHTML =" "
    lapitem = 0

}

const lap =()=>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");

    li.setAttribute("class", "lap-item")
    number.setAttribute("class", "number")
    timestamp.setAttribute("class", "time-stamp")
    ++lapitem;
    let l = lapitem<10 ? "0"+lapitem : lapitem;
    number.innerText=`#${l}`
    let m = minuteCounter < 10 ? "0" +  minuteCounter: minuteCounter;
    let s = secCounter < 10 ? "0" + secCounter : secCounter;
    let ms = milsecCounter < 10 ? "0" + milsecCounter : milsecCounter;
    timestamp.innerHTML =`${m} : ${s} : ${ms}`
    li.append(number, timestamp);
    laps.append(li)

}
playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
lapButton.addEventListener("click", lap)