// for each

const coding =["js","python","cpp","java"]

// coding.forEach(function (item){
//     console.log(`I like ${item}`)
// })

// coding.forEach((item)=>{
//     console.log( `I like ${item}`);
// }
// )
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const mycoding=[
    {
        languagename:"javascript",
        languagefile:"js"
    },
    {
        languagename:"python",
        languagefile:"py" 
    }
]
mycoding.forEach( (item)=>{
    
    console.log(item.languagename);
    console.log(item.languagefile);
})