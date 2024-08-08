//const mynums = [1,2,3,4,5,6,7,8,9]

//const newnums = mynums.filter((num) => num > 4)

//console.log(newnums);//[ 5, 6, 7, 8, 9 ] filter is used to filter out the things given in condition

// const newnums = mynums.filter((num) => {
//    return  num > 4
// } )
// console.log(newnums);//[ 5, 6, 7, 8, 9 ] when we use {} we have to give return function else it will not work


// const newnums=[]
// mynums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);//[ 5, 6, 7, 8, 9 ]

//***************************** */

//const mynums = [1,2,3,4,5,6,7,8,9]

// const newnums = mynums.map((num) => num+10)
// console.log(newnums);[
 // 11, 12, 13, 14, 15,
 // 16, 17, 18, 19
//]

// const newnums = mynums.map((num) => {
//     return num+10})
// console.log(newnums);//same out as above

// const newnums = mynums
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)

// console.log(newnums); 11, 21, 31, 41, 51,
// 61, 71, 81, 

// const newnums = mynums
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=>num>41)
// console.log(newnums); //[ 51, 61, 71, 81, 91 ];


//****************************reduce************************ */

const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc+currval
// },0)//0 is the initial value here then addition is compounding

//console.log(mytotal);
// acc : 0 and currval : 1
// acc : 1 and currval : 2
// acc : 3 and currval : 3

const mytotal = mynums.reduce((acc,curr)=>acc+curr,0)//same output as above

console.log(mytotal);

