//array

const myarr = [0,1,2,3,4,5]
const myheros = ["hanuman","spider"]

const myarr2 = new Array(1,2,3,4)

//array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

//myarr.unshift(9)//inserts the value at front of array
myarr.shift()
myarr.shift()//shifts the array by one towards left

// console.log(myarr.includes(9))//false
// console.log(myarr.indexOf(9))//-1

const newarr = myarr.join()

// console.log(myarr);//[ 2, 3, 4, 5 ]
// console.log(newarr);//2,3,4,5

//slice, splice
console.log("A ", myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);//[ 3, 4 ]
console.log("B ",myarr);//B  [ 2, 3, 4, 5 ]

const myn2 =  myarr.splice(1,3)
console.log("C", myarr);//C [ 2 ]
console.log(myn2);//[ 3, 4, 5 ]
