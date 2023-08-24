// data access 
const data = [{
    id: 1, name: 'abul', address: 'kochukhet'
}];
// console.log(data[0].address);

const data2 = {
    count: 5000,
    data: [
        {
            id: 1, name: 'leonovo', Price: 65000
        },
        {
            id:2, name: 'macbook' , price: 14500 //
        }
    ]
}
// console.log(data2.data[1].price);
const user = {
    id: 5001,
    name:'siuu',
    address: {
        street: {
first: "54/1 uttor side",
Second:'muslimabad road',
third: 'jelepara'
        },
        city: 'chittagong'
    }
}
console.log(user.address.street.Second)