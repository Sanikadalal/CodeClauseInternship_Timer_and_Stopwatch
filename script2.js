let hours = document.querySelector(".hours");
let minute = document.querySelector(".minute");
let second = document.querySelector(".sec");

let start = document.querySelector(".btn-play");
let reset = document.querySelector(".btn-reset");
let timer = document.getElementById("timer")
let bg =document.querySelector(".outer-circle")

let isstart = false;

let interval=null;

const totalvalue = ()=>{
  total = Number(hours.value)*3600+Number(minute.value)*60+Number(second.value)
}

const Timer = ()=>{
  totalvalue();
  total--;

  if(total >=0){
    var hr = Math.floor(total/3600);
    var mt = Math.floor((total/60)-(hr*60));
    var sc =total- ((hr*3600)+(mt*60))

    hours.value=hr<10 ? "0"+hr : hr;
    minute.value=mt<10 ? "0"+mt : mt;
    second.value=sc<10 ? "0"+sc : sc;
    
  }
}

const startf =()=>{
  if(hours.value === "" || minute.value === "" || second.value ===""){
    alert("Please enter any value")
  }else if(minute.value > 60 || second.value>60){
    alert("Please Enter Value of Minute Or Second Less Than 60 ")
  }
  else if(isstart === false){
    isstart=true
    start.innerHTML ="Pause"
    clearInterval(interval)
    interval= setInterval(Timer, 1000)
    bg.classList.add("animation-bg")
  }
  else{
    isstart=false
    start.innerHTML="Start"
    clearInterval(interval)
    bg.classList.remove("animation-bg")
  }
}

const resetf =()=>{
  hours.value =" ";
  minute.value=" ";
  second.value=" ";
  start.innerHTML ="Start"
  bg.classList.remove("animation-bg")

}

start.addEventListener("click", startf);
reset.addEventListener("click", resetf)




