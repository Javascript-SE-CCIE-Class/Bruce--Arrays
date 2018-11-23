const ages = [10,20,30,70,56,4,3,15];
console.log(`The Original ARRAY: ${ages}`);

function isAdult(value) {
    return value >= 18;
  }
  
var filtered = ages.filter(isAdult);
  console.log(`The new array of adult ages : ${filtered}`);