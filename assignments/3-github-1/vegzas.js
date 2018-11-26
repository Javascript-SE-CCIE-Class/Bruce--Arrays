// ARRAY 3
const vegzas = [
    {
        name: 'Charly',
        age: 32,
        coder:true,
        gender: 'm',
    },
    {
        name: 'Law',
        age: 21,
        coder:true,
        gender: 'm',
    },
    {
        name: 'Rosey',
        age: 42,
        coder:false,
        gender: 'f',
    },
    {
        name: 'Steph',
        age: 18,
        coder:true,
        gender:'f'
    },
    {
        name: 'Jon',
        age: 47,
        coder:false,
        gender: 'm',
    },
];

// Part 1 - Find the total age of male coders under 25
console.log("\n\nVEGZAS ARRAY");
console.log('Part 1 - Find the total age of male coders under 25\n======================');
let age_array = vegzas.filter(user => user.gender === 'm');
var age_sum = 0;
age_array.forEach(element => {
    if (element['age'] < 25)
    age_sum += element['age'];
});
console.log(age_sum);

// Part 2 - List all male coders over 30
console.log('\nPart 2 - Find all male coders older than 30\n======================');
let age_arr_2 = vegzas.filter(user => user.gender === 'm');
age_arr_2.forEach(element => {
    if (element['age'] > 30)
    console.log(`🎯Name : ${element.name} |Age :${element.age}|Gender: ${element.gender}|Coder :${element.coder} `);
});

    //
    // let age_sum = 0;
   let a = [];
