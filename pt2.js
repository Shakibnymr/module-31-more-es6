// 1. You have an odd array (array with odd numbers). [1,3,5,7,9] . Now convert this array into an even array . Do this using for loop & array.map() method. 
let oddNumbers = [1,3,5,7,9];
let evenNumbers = [];
for(let i = 0; i < oddNumbers.length; i++){
    const index = oddNumbers[i];
     let newIndex = index + 1;
     evenNumbers.push(newIndex);
}
// console.log(evenNumbers);

const oddNumbersUsingMap = oddNumbers.map(n => n+1);
// console.log(oddNumbersUsingMap);

//2. You are given an array say: [33, 50,79,78,90,101,30]. Now return/get all the elements which are divisible by 10 using array.filter( method).

//Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.
// const inputs = [33, 50,79,78,90,101,30];
// const divisibleBy10 = inputs.filter(n => n%10==0);
// console.log(divisibleBy10);
const inputs = [33, 50,79,78,90,101,30];
const divisibleBy10 = inputs.find(n => n%10==0);
console.log(divisibleBy10);




















