var a=300

if(true){
    let a =10
    const b=20
    var c=30
}

//console.log(a); let cannot be used out side the block scope 
//console.log(b);//same goes with const
//console.log(c);

// nested scope

function one(){
    const username="Maaj"

    function two()
    {
        const website="github"
        console.log(username);
    }
   // console.log(website);
    two();
}
//one();

if(true)
{
    const username ="Maaj"
    if(username=="Maaj")
    {
        const website=" youtube"
        //console.log(username+website);
    }
    
}
// imp 
console.log(addone(5))
function addone(num)
{
    return num+1
}

console.log(add2(5))
const add2=function(num){
    return  num+2;
}//it is a expression in that you cannot declare function first 
