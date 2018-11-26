const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
];
  
// Part 1 - Find all users older than 24
console.log("\n\nTEXASS ARRAY");
console.log('Part 1 - Find all users older than 24\n======================');;
let newArray = texasss.filter(user => user.age > 24);
newArray.forEach(element => {
  console.log(`🎯Name : ${element.name} |Age :${element.age}|Gender: ${element.gender} `);
});

// Part 2 - Find the total age of all users
console.log('\nPart 2 - Find the total age of all users\n======================');
let age_arr = texasss.filter(user => user.age);
var age_sum = 0;
age_arr.forEach(element => {
   age_sum += element['age'];
});
console.log(age_sum);

// Part 3 - List all female coders
console.log('\nPart 3 - List all female coders\n======================');
let w_arr = texasss.filter(user => user.gender === "f");
w_arr.forEach(elementi => {
  console.log(`🎯Name : ${elementi.name} |Age :${elementi.age} `);
});
console.log("\n\n");
