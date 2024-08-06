function one(){
    const username = "parth"
    function two(){
        const website = "youtube"
        console.log(username);//will get executed as it it inside the scope of one()

    }
    //console.log(website);//will not get executed as it is outside the scope
    two()
}
//one()


if (true){
    const username = "parth"
    if(username==="parth"){
        const website = "youtube"
        //console.log(username+website);
    }
    //console.log(website);//will not get executed as it is out of the scope 
}
//console.log(username);//will not get executed as it is out of the scope 

//****************************************interesting********************************** */

// function addone(num){
//     return num+1
// }
// addone(5)

//both are same but differet as we will se the difference now

// const addtwo = function(num){
//     return num+2
// }
// addtwo(5)


addone(5)//it doesnt give any error when we call addone first
function addone(num){
    return num+1
}



addtwo(5)//but here it will give an error that addtwo must be initialised before

const addtwo = function(num){//Cannot access 'addtwo' before initialization
    return num+2
}

