const date=function(str){
    console.log(str,Date.now());
  }
const intervalid=setInterval(date,2000,"hi")

//const clear=clearInterval(intervalid);

document.querySelector('#btn1').addEventListener('click',()=>{
    setTimeout(intervalid)
    console.log("Start");
})
document.querySelector('#btn2').addEventListener('click',()=>{
    clearInterval(intervalid)
    console.log("Stop");
})