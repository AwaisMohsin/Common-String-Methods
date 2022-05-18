//Common string methds
let email = 'Awaisbibnmohsin@gmail.com';
let result = email.lastIndexOf('n');// A is on 0 Position
console.log(result);
let resultSlice1 = email.slice(0,10);
console.log(resultSlice1);// Remeber here 0 is behind A or A is on 1 Position
let resultSlice2 = email.slice(3,10);
console.log(resultSlice2)
let resultSlice3 = email.slice(16,25);
console.log(resultSlice3);
let resultReplace = email.replace('i','e');
console.log(resultReplace);// Will replace first i with e