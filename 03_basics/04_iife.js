//immediatly invoked function expression(IIFE)
// function chai(){
//     console.log(`db connected`);

// }

// chai()


//it can bealso written as

(function chai(){
    //named IIFE
    console.log(`db connected`);

})();//db connected, as global scope chya pollution mula problem hot atsya khup vela tr
//te ghalnyasathi apn iife vaprto

(()=>{
    console.log(`db connected two`);
})();

// ; must be given to end the code if not given then iife will not work for the next functions

((name)=>{
    console.log(`db connected two ${name}`);
})("parth");


