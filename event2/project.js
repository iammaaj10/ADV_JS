const sayMaaj=function(){
    console.log("Maaj");
}
const changetext=function(){
    document.querySelector('h1').innerHTML="Best js tutorial"
}

const ref=setTimeout(changetext,2000)

document.querySelector('#btn').addEventListener('click',()=>{
    clearTimeout(ref)
    console.log("STOPPED");
})