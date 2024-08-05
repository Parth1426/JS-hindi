//const tinderuser = new Object()//singleton object

const tinderuser={}//non songleton object

tinderuser.id = "123abc"
tinderuser.name ="sammy"
tinderuser.isloggedin = false

//console.log(tinderuser);//{ id: '123abc', name: 'sammy', isloggedin: false }

const regularuser = {
    email : "parth@gpt.com",
    fullname : {
        userfullname:{
            firstname : "parth",
            lastname : "deshmukh"
        }
    }
 }

// console.log(regularuser.fullname);//{ userfullname: { firstname: 'parth', lastname: 'deshmukh' } }
// console.log(regularuser.fullname.userfullname)//{ firstname: 'parth', lastname: 'deshmukh' }

const obj1 = {1:"a",2:"b"}
const obj2={3: "a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2)//ere {} is target nd obj1 nd obj2 are sources which are getting into it
// console.log(obj3);

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

// const user = {
//     {
//     ""
// },
// {
//     ""
// },

// }
// user[1].email

// console.log(tinderuser);//{ id: '123abc', name: 'sammy', isloggedin: false }
// console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isloggedin' ]
// console.log(Object.values(tinderuser));//[ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderuser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]

// console.log(tinderuser.hasOwnProperty('isloggedin'));//true

//***************************************destructuring************************************** 

const course ={
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "hitesh"
}

//course.courseinstructor

//const {courseinstructor} = course
const {courseinstructor : instruct} = course
//console.log(courseinstructor)//hitesh
console.log(instruct)//hitesh

//****************************************API*************************************** 
//JSON is the structure in which the values come to users
// {
//     "name":"parth",
//    " coursename" : "js in hindi"   //api can be written as objects
//     "price" : "free"
// }

//{
    //this is JSON format
//}

//randomuserme most used api
//also api can be given in array






