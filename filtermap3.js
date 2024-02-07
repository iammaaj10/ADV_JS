//reduce()

const arr=[1,2,3]

const myTotal=arr.reduce((acc,curval)=>{
    console.log(`acc:${acc} and curval:${curval}`);
    return  acc+curval;
   
},3)
console.log(myTotal);

const shoppingcart=[
    {
        itemname:"js course",
        price:999
    },
    {
        itemname:"python course",
        price:999
    },
    {
        itemname:"app development course",
        price:1999
    }
]

const price2=shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(price2);