const bumble = new Object()

bumble.id="123abc"
bumble.name="Maaj"
bumble.isLoggedin=false
// console.log(bumble);

const user={
    email: "maajb1122@gmail.com",
    fullname:{
        username:{
    firstname:"Maaj",
    lastname:"Bhadgaonakar"
                }
            }
        }
// console.log(user.fullname);    

// merging the object   
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

// objects inside the array

const users=[
    {
        id:1,
        name:"John Doe",
        
    },
    {
        id:2,
        name:"Maaj",

    }
]

users[1].name

console.log(bumble);

console.log(Object.keys(bumble));
console.log(Object.values(bumble));
console.log(Object.entries(bumble));

console.log(bumble.hasOwnProperty('name1'));