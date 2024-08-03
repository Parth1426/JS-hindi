const name = " parth"
const repocount = 50

console.log(name + repocount + "value")//output parth50value

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename= new String('parth_pc')//invokes object

console.log(gamename[0]);//p
console.log(gamename.__proto__);//{}

console.log(gamename.length);//7

console.log(gamename.toUpperCase());//PARTHPC

console.log(gamename.charAt(2));//r
console.log(gamename.indexOf('t'));//3

const newstring = gamename.substring(0,4)//part
console.log(newstring);

const names= gamename.slice(-8,4)//part slice can also take negative values
console.log(names);

const nameone= "   parth   "
console.log(nameone);
console.log(nameone.trim())//trims the spaces 

const url = "http://parth.com/parth%20deshmukh"
console.log(url.replace('%20','-'));//replaces %20
console.log(url.includes('sundar'));//false
console.log(gamename.split('_'));//splits the name into arrays 

