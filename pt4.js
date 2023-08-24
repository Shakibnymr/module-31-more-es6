const people = [
    {name: 'Meena', age: 20},
    {name: 'Meena', age: 15},
    {name: 'Meena', age: 22}
]
const totalSum = people.reduce((p,c)=>p+c.age,0);
// console.log(totalSum);
let sum = 0;
for ( let i = 0; i < people.length;i++){
const index = people[i];
sum = sum + index.age;

}
// console.log(sum);
const {x,y,z} = {x:1,y1:2,z:3};
// console.log(x);
const nums = [1,2,3,4,5];
let output = nums.filter(n=> n%2);
// console.log(output);
const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const fr = friends.find ( f => f.length ==5);
// console.log(fr);
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;
// console.log(price);