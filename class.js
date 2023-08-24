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

// has some properties, method 
class Product {
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product ('maf chai');
// console.log(lenovo);
// lenovo.speak('odo lobina')

class Teacher {
    constructor(name, subject, address){
        this.name = name;
        this.subject = subject;
        this.address = address;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}
const tapan = new Teacher ('shahjan topon', 'physics','hospital gate');
console.log(tapan);
const rashid = new Teacher('rashid sir', 'english', 'muslimabad');
console.log(rashid);
tapan.lecture()