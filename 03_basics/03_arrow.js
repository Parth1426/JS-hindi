const user ={
    username : "parth",
    price : 999,

    welcomemsg : function(){
            //console.log(`${this.username}, welcome to website`)//this is used for the current context
            console.log(this);//here it gives current context of the object 
            // { username: 'parth', price: 999, welcomemsg: [Function: welcomemsg] }
    }
}
//user.welcomemsg()//parth, welcome to website
//user.username = "sam"
//user.welcomemsg()//sam, welcome to website

//console.log(this);


// function chai(){
//     //console.log(this)
//     let username="parth"
//     //console.log(this.username);//undefined//this does not give context for the functions only wrks for functions
// }
// chai()

//after using only this in function we get output as
{/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch]
} */}


// const chai = function(){
//     //console.log(this)
//     let username="parth"
//     console.log(this.username);//undefined//this does not give context for the functions only wrks for functions
// }
// chai()

// *******************************arrow*************************************

// const chai = () =>{//arrow
    
//     let username="parth"
//     console.log(this.username);//undefined//this does not give context for the functions only wrks for functions
// }
// chai()


// const chai = () =>{//arrow
    
//     let username="parth"
//     console.log(this);//{}//this does not give context for the functions only wrks for functions
// }
// chai()


// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// arrow doest have compulsion on using {} nd return funt without using them we can use arrow

// const addtwo = (num1,num2) => num1+num2//7

// console.log(addtwo(3,4))

//const addtwo = (num1,num2) => (num1+num2)//if {} are used return is compulsory if not then only()can be used

const addtwo = (num1,num2) => ({username:"parth"})
console.log(addtwo(3,4))//{ username: 'parth' }
