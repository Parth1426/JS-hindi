// singleton


//object literals


const mysym = Symbol("key1")

const jsuser = {
    name: "parth",
    "full name" : "parth deshmukh",
    [mysym] : "mykey1",
    age: 20,
    location: "pune",
    email: "parthgoogle.com",
    isloggedin: false,
    lastlogindays:["monday","saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);//whenever accesed in brackets plz write as strings 

// console.log(jsuser.full name);//here it will give error so dot format here has some limitations but []does not have that limitations
//  console.log(jsuser["full name"]);

//  console.log(jsuser.mysym);//mykey1

//  console.log(typeof jsuser.mysym);//string but we want it as typeof symbol// [Symbol(key1)]: 'mykey1'

//console.log(jsuser[mysym]);//the correct to write or access the symbol

jsuser.email= "parthdeshmukh45@gpt.com";//to change the email
//Object.freeze(jsuser)//no chnages further can be done in the email now 
jsuser.email= "parthdeshmukh45@microsoft.com"
//console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsuser.greeting());//hello js user
//console.log(jsuser.greeting);//[Function (anonymous)]
console.log(jsuser.greetingtwo());//hello js user,parth

