const form=document.querySelector('form');
// thid usecase will return the empty 
//const height= parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault();
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const results= document.querySelector('#results');

   if(height===''|| height<0 || isNaN(height))
   {
    results.innerHTML=`Please give the valid height ${height}`
   }
   else if(weight===''|| weight<0 || isNaN(weight))
   {
    results.innerHTML=`Please give the valid weight ${weight}`
   }
   else{
   const bmi= (weight/((height*height)/10000)).toFixed(2);

   // show the result
    results.innerHTML=`<span>Your BMI is ${bmi}</span>`;

    if(bmi<18.6)
    {
        results.innerHTML=`<span>Under weight ${bmi}`
    }

else if(bmi>=18.6 && bmi<29.9){
    results.innerHTML=`<span>Normal range ${bmi}</span>`
}
else{
    results.innerHTML=`<span>Greater range ${bmi}</span>`
}
   }


});