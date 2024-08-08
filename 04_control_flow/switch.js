// switch (key){
//     case value:
//         break;

//         default:
//             break;
// }


const month = 3

switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
     case 3:
        console.log("march");
        
        break;

    default:
        console.log("default");
        break;
}

//falsy values
//false,0,-0,BigInt 0n, "" , null, undefined

//truthy values
//"0",'false', " ",[],{},function(){}


const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

//****************************Nullish Coalescing Operator(??):null undefined****************************** */


let val1;
//val1= 5 ?? 10//5
//val1=null ?? 10 // 10

//val1 = undefined ?? 10 //10

//terniary operator
//condition ? true : false

console.log(val1);