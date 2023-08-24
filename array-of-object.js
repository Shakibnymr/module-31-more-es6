const products = [
    {
        id: 1, name: 'lenovo', price: 45000
    },
    {
        id: 2, name: 'dell', price: 55000
    },
    {
        id: 3, name: 'hp', price: 75000
    },
    {
        id: 4, name: 'mac', price: 175000
    }
]
//map
const names = products.map(product => product.name);
// console.log(names);
const price = products.map(product => product.price);
// console.log(price);

//forEach
// products.forEach(p => console.log(p.id)); 

//filter
const filteringPrice = products.filter(p => p.price > 50000);
// console.log(filteringPrice);

//find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// reduce
const total = products.reduce((accumulator,current) => accumulator + current.price,0);
console.log(total);