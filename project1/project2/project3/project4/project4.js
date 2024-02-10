let randomnumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#sub')
const userinput=document.querySelector('#guessesfield')
const guessslot=document.querySelector('.guesses')

const lastres=document.querySelector('.lastresult')
const loworhigh=document.querySelector('.loworhi')
const startover=document.querySelector('.result')

const p=document.createElement('p')

let prevGuess=[]
let numguess=1
let playgame=true
if(playgame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value)
        validateguess(guess)
    })
}
function validateguess(guess)
{
  //validate the number 
  if(isNaN(guess)){
    alert("Please enter the valid number")
  }
  else if(guess<1)
  {
    alert("Please enter the valid number")
  }
  else if(guess>100){
    alert("Please enter the number less than 100")
  }
    else{
        prevGuess.push(guess)
        if(numguess===11)
        {
            guessdisplay(guess)
           displaymsg(`Game over. Random number was ${randomnumber}`)
           endgame()
        }
        else{
            guessdisplay(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
//if value is equal or low or high 

    if(guess === randomnumber){
        displaymsg(`You guess it right!!`)
        endgame()
    }
      else if(guess>randomnumber)
    {
        displaymsg(`Number is too low`)

    }
      else if(guess<randomnumber)
    {
        displaymsg(`Number is too high`)

    }
}
function displaymsg(message)
{
//values will be clean update the guess and remaining guess
loworhigh.innerHTML=`<h2>${message}</h2>`;
  
}

function guessdisplay(guess)
{
 // msg will be print
 userinput.value=''
 guessslot.innerHTML+= `${guess} `
 numguess++;
 lastres.innerHTML=`${11-numguess}`
 
}


function endgame()
{
    userinput.value=''
    userinput.setAttribute( "disabled" , '' )
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start the new game </h2>`;
    startover.appendChild(p)
    playgame=false
    newgame();
}

function newgame()
{
   const newbtn= document.querySelector('#newgame')
   newbtn.addEventListener('click',function(e){

     randomnumber=parseInt(Math.random()*100+1)
     prevGuess=[]
     numguess=1
     guessslot.innerHTML=""
     lastres.innerHTML=`${11-numguess}`;
     userinput.removeAttribute( 'disabled');
     startover.removeChild(p)
    playgame=true
   })
}


