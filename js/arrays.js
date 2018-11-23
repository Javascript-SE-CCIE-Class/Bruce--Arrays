let Students = [];



function add(name,age) {
    let details = [];
    name =document.getElementById('num1').value;
    age = document.getElementById('ans').value;
    details.age = age;
    details.name= name;
    Students.push(details);
    name = "";
    age = "";
    console.log(Students);
    alert('details added!!');
}
Students.forEach(function (std) {
    console.log(`${std.name} is ${std.age} years old`);
})





