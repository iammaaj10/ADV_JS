// document.getElementById('japan').onclick=()=>{
//     alert("japan is clicked")
// }
// best approach

// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log("Click inside the ul");
// },false)

// document.getElementById('japan').addEventListener('click',(e)=>{
//     console.log("japan is clicked");
//     e.stopPropagation();
// },false)

// document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//    console.log("Google is clicked");
// },false)

document.querySelector('#images').addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG')
    {
        
        let removeit =e.target.parentNode
        removeit.remove()
    }
    console.log(e.target.id);
    
   
},false)

