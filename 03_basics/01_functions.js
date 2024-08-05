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

//console.log(loginmessage());

// function calculatecartprice(...num1){
//     return num1
// }
//console.log(calculatecartprice(200,400,500))//[ 200, 400, 500 ]

function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,2000))//[ 500, 2000 ],val1 nd val2 will take the values of 200 nd 400


const user = {
    username : "parth",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleobject(user)//username is parth and price is 199

// handleobject({
//     username : "sam",//username is sam and price is 399
//     price: 399
// })


const mynewarray = [200,400,100,600]

function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(mynewarray));//400

console.log(returnsecondvalue([200,400,500,1000]))//400



