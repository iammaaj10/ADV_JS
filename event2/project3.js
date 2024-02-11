const randomcolor=()=>{
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
};
let intervalid
const startChangingcolor=()=>{
   if(!intervalid)
   {
    intervalid= setInterval(changebgcolor,2000)
   }
   function changebgcolor(){
    document.body.style.backgroundColor=randomcolor();
   }
}
const stopChangingcolor=()=>{
    clearInterval(intervalid);
    intervalid=null;
}

document.querySelector('#btn1').addEventListener('click',startChangingcolor)

document.querySelector('#btn2').addEventListener('click',stopChangingcolor)
