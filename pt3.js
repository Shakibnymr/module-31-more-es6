// 3. you have an array of objects:
const instructor = [
    {
        name: 'nodi', age:28, position: 'senior'
    },
    {
        name: 'akil', age:26, position: 'junior'
    },
    {
        name: 'sobuj', age:30, position: 'senior'
    }
];
const senior = instructor.filter(f => f.position === 'senior');
console.log(senior);