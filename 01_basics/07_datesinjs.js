let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());

// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

// console.log(typeof(mydate));

let mycreatedate = new Date(2023,0,23,5,3)//here in js month starts with zero
//console.log(mycreatedate.toString());

//console.log(mycreatedate.toLocaleString());

let urdate= new Date("2023-01-14")//1/14/2023
//console.log(urdate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);//1722658550404
// console.log(urdate.getTime())//1673654400000
// console.log(Math.floor(Date.now()/1000))//1722658801 interview most asked quetion convertion to seconds


let newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday: "long",
})






