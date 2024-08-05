const marvel =["thor","ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc);
// console.log(marvel);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel[3][2]);//batman

// const allheros = marvel.concat(dc)
// console.log(allheros);[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_newheros = [...marvel, ...dc]
// console.log(all_newheros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)

console.log(real_array);//[
  //  1, 2, 3, 4, 5,
   // 6, 7, 6, 7, 4,
   // 5
  //]


  console.log(Array.isArray("parth"))//false
  console.log(Array.from("parth"));//[ 'p', 'a', 'r', 't', 'h' ]

  console.log(Array.from({name : "parth"}));//[] interesting case here as it cant convert into array we have to specify that the
  //array is of keys or values

  let score1=100
  let score2=200
  let score3=300

  console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]