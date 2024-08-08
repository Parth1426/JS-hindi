//for of

//["","",""]
//[{},{},{}]

// const arr = [1, 2, 3, 4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "helllo world"
// for (const greets of greetings) {
//     console.log(`each char is ${greets}`);
    
    
// }


//Maps

// const map = new Map()
// map.set('IN',"india")//it only takes unique values no repatation of keys is done here
// map.set('usa',"america")
// map.set('pak',"pakistan")
// //console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-',value);//IN :- india
//     // usa :- america
//     // pak :- pakistan
    
// // }

// for (const [key] of map) {
//     console.log(key);//[ 'IN', 'india' ]
//    // [ 'usa', 'america' ]
//     //[ 'pak', 'pakistan' ]
    
// }


// const myobj = {
//     game1: "NFS",
//     game2: 'spiderman'
// }

// for (const [key,value] of myobj) {
//        console.log(key, ':-',value)//: myobj is not iterable
// }

//hence objects are not iterable in forof structure


//**********************************for in*********************************** */

const myobj = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for (const key in myobj) {
//     console.log(myobj[key]);
//     javascript
//     c++
//     ruby
//     swift by apple
        
    
// }

//here we undestand that objects are iterable in the for in loop



const programming = ["js","rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key)//0,1,2,3,4
// }
// for (const key in programming) {
//     console.log(programming[key]);//js
//     //rb
//     //py
//     //java
//     //cpp
// }


//maps are not iterable in forin loop

//***********************************for each loop*************************************** */

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

//above three ways are given to write the for each function

// coding.forEach((item,index) => {
//         console.log(item,index);
// })
/*js 0
ruby 1
java 2
python 3
cpp 4*/

// coding.forEach((item,index,arr) => {
//           console.log(item,index,arr);
// })
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]*/


// const mycoding =[//an object under array how it is been accessed we saw below
//     {
//         languagename : "java"
//     }
// ]

// mycoding.forEach((item) => {

//     console.log(item.languagename);

// })