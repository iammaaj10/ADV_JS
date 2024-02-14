const user={
    username:"Maaj",
    login:8,
    signedin:true,

    getUserDeails:function(){

        //console.log("Got the user details");
       // console.log(`Username ${this.username}`);
       console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDeails());
//console.log(this);


function User(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    this.greeting=function(){
       // console.log(`Welcome ${this.username}`);
    }

    return this

}
const userone= new User("maaj",12,true)
const usertwo= new User("chai n maaj",11,false)
console.log(userone.constructor);
console.log(usertwo);
console.log(userone instanceof User);