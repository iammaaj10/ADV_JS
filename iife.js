// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

// arrow function
( (name)=>{
    // =unnamed iife plus parameter
    console.log(`Db connected ${name}`);
})('maaj')
