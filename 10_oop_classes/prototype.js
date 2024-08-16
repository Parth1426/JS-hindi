




let myheros=["thor","spiderman"]

let heropower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.parth=function(){
    console.log(`parth is present in all objects`);

}

//heropower.parth()
Array.prototype.heyparth=function(){
    console.log(`parth says hello`);
}

myheros.parth()
myheros.heyparth()
//heropower.heyparth()//heropower.heyparth is not a function