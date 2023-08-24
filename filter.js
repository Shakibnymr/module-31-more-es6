//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1,4,5,6,23,22];
const players = [75, 2,65,67,72,55,59];
const friends = ['tom', 'babu', 'efu', 'fahima', 'raju', 'raja']
const selected = players.filter(p => p%2 ===0);
// console.log(selected);

const names = friends.filter(f => f.length == 4);
console.log(names);