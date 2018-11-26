// ARRAY 2
const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ];





// Part 1 - List all users in US in ascending order
console.log("\n\nNEWYORK ARRAY");

console.log("Part 1 - List all users in US in ascending order\n======================");
let us_arr = newieyork.filter(user => user.us === true);
us_arr.forEach(element=>{
    console.log(`🎯Name : ${element.name} |Age :${element.age}|Gender: ${element.gender}|Coder : ${element.coder}`);
});

// Part 2 - Sort all users by age
console.log("\nPart 2 - Sort all users by age\n======================");
newieyork.sort(function (a, b) {
    return a.age - b.age;
});
newieyork.forEach(element => {
    console.log(`🎯Name : ${element.name} |Age :${element.age}|Gender: ${element.gender}|Coder : ${element.coder}`);
});

// Part 3 - List all female coders
console.log('\nPart 3 - List all female coders\n======================');
let w_arry = newieyork.filter(user => user.gender === "f");
w_arry.forEach(elementi => {
    console.log(`🎯Name : ${elementi.name} |Age :${elementi.age} `);
});