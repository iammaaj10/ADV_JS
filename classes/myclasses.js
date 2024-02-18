// class user{
//     constructor(username,email,pass)
//     {
//         this.username=username;
//         this.email-email
//         this.pass=pass
//     }
//     encryptpass()
//     {
//         return `${this.pass}abc`
//     }

//     capitaluser(){
//         return `${this.username.toUpperCase()} `
//     }
// }

// const coffee=new user("coffee","coffe@.in","123")
// const coffee1=new user("coffee","coffe@.in","123")


// console.log(coffee.encryptpass());
// console.log(coffee.capitaluser());

//behind the scene

function user(username,email,pass){
    this.username=username;
    this.email-email
    this.pass=pass
}

user.prototype.encryptpass=function(){
    return `${this.pass}abc`
}

const coffee2=new user("coffee","coffe@.in","123")

console.log(coffee2.encryptpass());
