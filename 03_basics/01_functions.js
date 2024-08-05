// console.log("P");
// console.log("A");
// console.log("R");
// console.log("T");
// console.log("H");

function saymyname(){
console.log("P");
console.log("A");
console.log("R");
console.log("T");
console.log("H");
    
}

//saymyname()

// function addtwonumbers(num1,num2){
//     console.log(num1+num2);
// }
// addtwonumbers(3,4)//7
// addtwonumbers(3,"4")//34
// addtwonumbers(3,"a")//3a

// function addtwonumbers(num1,num2){
//     // let result = num1+num2
//     // return result

//     return num1+num2
// }

// const result = addtwonumbers(3,5)

// console.log("result: ",result);

// function loginmessage(username)
// {
//     return `${username} just logged in` 
// }
// console.log(loginmessage("parth"));//parth just logged in

// console.log(loginmessage(""));// just logged in

// console.log(loginmessage());//undefined just logged in

function loginmessage(username)
{
    // if(username === undefined)
    // {
    //     console.log("please enter a user name ");
    //     return 
    // }
    if(!username)
        {
            console.log("please enter a user name ");
            return 
        }
    return `${username} just logged in` 
}

console.log(loginmessage());


