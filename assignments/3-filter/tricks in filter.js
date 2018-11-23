let fullArray = texasss.filter(function (user) {
    if (user.age > 18) {
        return user
    }
});
console.log(fullArray);


texasss.push({ name: 'James', age: 41, gender: 'm', us: true });
console.log(texasss);

let newtex = [...texasss];
console.log(newtex);

let newtex2 = texasss.map((value) => {
    return value;
})

console.log(newtex2);