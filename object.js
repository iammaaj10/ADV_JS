// object literals
const sym=Symbol("logo")
const JsUser ={
    name:"Maaj",
    age: 20,
    location:"Ichalkarngi",
    email:"maajb1122@gmail.com",
    [sym]:"logo",
    hobbies :["Playing","learning"]
    
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[sym]);
// JsUser.name="Alfiya"
// console.log(JsUser.name);
// Object.freeze(JsUser)
// JsUser.name="Messi"
// console.log(JsUser);

JsUser.greeting=function()
{
    console.log("Hello js user");
}
JsUser.greeting2=function()
{
    console.log(`Hello js user,${this.name}`);//backtics for string interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());