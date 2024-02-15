function multiply5(num)
{
    
    return num*5;
}

multiply5.power=2

console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);

function createuser(username ,score){
    this.username=username
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printme=function(){
    console.log(`Price is ${this.score}`);
}
const chai= new createuser("chai",25)
const coffee= new createuser("coffee",50)

chai.printme()