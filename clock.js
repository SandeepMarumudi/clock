
function stopwatch(){

     b=setInterval(function(){
        let a=new Date()
        let h=a.getHours()
        let m=a.getMinutes()
        let s=a.getSeconds()
        let ms=a.getMilliseconds()
        let time=`${h}:${m}:${s}:${ms}`
        let t=document.getElementById("clc")
        t.innerHTML=time
    })
}

let stp=document.getElementById("st")
stp.addEventListener("click",watch)
function watch(){
    clearInterval(b)
}
let star=document.getElementById("sta")
star.addEventListener("click",watch2)
function watch2(){
    stopwatch()
}























// function clock(){

//     let c=new Date()
//     let hour=c.getHours()
//     let min=c.getMinutes()
//     let sec=c.getSeconds()
//     let msec=c.getMilliseconds()
//     if(hour>12)
//     {
//           let time=`${hour}:${min}:${sec}:${msec} PM`
//           let t=document.getElementById("clc")
//           t.innerHTML=time
//           setTimeout(clock,1000)

//     }
//     else{

//         let time=`${hour}:${min}:${sec}:${msec} AM`
//         let t=document.getElementById("clc")
//         t.innerHTML=time
//         setTimeout(clock,1000)
//     }
// }
// clock()