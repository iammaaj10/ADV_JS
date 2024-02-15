function setusername(user) {
this.user=user
console.log("called");
}
function createuser(user,email,pass){
   
    setusername.call(this,user)    
    
     this.email=email
    this.pass=pass
}


const coffee=new createuser("coffee","chai@fb.com","123")
console.log(coffee);