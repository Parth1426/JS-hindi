# Projects related to DOM

##project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1
``` javascript
console.log("hitesh")

const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")


buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id==='grey')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow')
    {
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='purple')
    {
      body.style.backgroundColor=e.target.id
    }
  })
})


````

## project 2 solution
```javascript
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

const height =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')
const guide = document.querySelector('#weight-guide')

if(height==='' || height<0 || isNaN(height)){
  results.innerHTML=`plz give a valid height ${height}`;

}
else if(weight==='' || weight<0 || isNaN(weight)){
  results.innerHTML=`plz give a valid weight ${weight}`;

}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2)
  //show the result
  results.innerHTML=`<span>${bmi}</span>`;
}


const bmi=(weight/((height*height)/10000)).toFixed(2)


if(bmi<18.6)
{
  guide.innerHTML ='underweight';
}
else if(bmi>24.9){
  guide.innerHTML =`Overweight`;
}
else{
  guide.innerHTML =`normal range`;
}




})

```

## project 3 solution
```javascript

const clock = document.getElementById('clock')
//const clock =document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  clock.innerHTML=date.toLocaleTimeString();
},1000)

```

## project 4 solution
```javascript

const randomnum=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrhi');
const startOver=document.querySelector('.resultParas');


const p = document.createElement('p')


let prevguess=[]
let numguess=1

let playgame = true

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userinput.value)
    validateguess(guess)
  });
}


function validateguess(guess){
  if(isNaN(guess)){
    alert(`plz enter a valid number`)
  }
  else if(guess<1){
    alert(`plz enter a valid number`)
  }
  else if(guess>100){
    alert(`plz enter a valid number`)
  }
  else{
    
    prevguess.push(guess)
    if(numguess===11){
      displayguess(guess)
      displaymsg(`game over. random no was ${randomnum}`)
      endgame()
    }
    else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess===randomnum){
    displaymsg(`you guessed it right`)
    endgame()
  }
  else if(guess<randomnum)
  {
    displaymsg(`number is too low`)
  }
  else if(guess>randomnum)
  {
    displaymsg(`number is too high`)
  }

}

function displayguess(guess){
  userinput.value=' '
  guessSlot.innerHTML += `${guess}   `;
  numguess++;
  remaining.innerHTML=`${11 - numguess}`;
}

function displaymsg(message){
  lowOrhi.innerHTML=`<h2>${message}</h2>`;
}

function newgame(){

  const newgamebutton=document.querySelector(`#newgame`)

  newgamebutton.addEventListener('click',function(e){
    const randomnum=(parseInt(Math.random()*100+1));
    prevguess = []
    numguess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11 - numguess}`;
    userinput.removeAttribute(`disabled`)
    startOver.removeChild(p)

    playgame=true

  })
 
}

function endgame(){
  userinput.value =' '
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newgame">Start new game</h2>`;
  startOver.appendChild(p);
  playgame=false
  newgame();
  
 

}
```

## project 6 solution
```
javascript

//generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color ='#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
};
let intervalid
const startChangingColor = function(){
  if(!intervalid)
  {
    
   intervalid=setInterval(changeBgcolor,1000)
  }
  function changeBgcolor(){
    document.body.style.backgroundColor=randomColor();
  }
  
}
const stopChangingColor = function(){
  clearInterval(intervalid)
  intervalid = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);


document.querySelector('#stop').addEventListener('click',stopChangingColor);


```

## project 5 solution
```javascript
const insert =document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.Key===' '?'Space':e.Key}</td>
    <td>${e.KeyCode}</td>
    <td>${e.Code}</td>
  </tr>

</table>
  </div>
  `
   ;
});
```