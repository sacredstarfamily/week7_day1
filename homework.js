const name = "Kekambus_142";
const welcomeMsg = "Hello, " + name + "!";
console.log(welcomeMsg);

const temperatureC = 25;
const temperatureF = (temperatureC * 9 / 5) + 32;




let count = 0;
while (count <= 50) {
    console.log(count);
    count += 5;
}

function task1() {
    alert("Hello, " + name + "!");
}

function task2() {
    if (temperatureF > 80) {
        console.log("It's a hot day!");
        alert("It's a hot day!")
    } else {
        console.log("It's not too hot today.");
        alert("It's not too hot today.")
    }
}
let task3 = () => {
        let count = 0;
        alert("counting to 50 by 5s: in the console");
        while (count <= 50) {
            console.log(count);

            count += 5;
        }

    }
    //day 2 exercise 1
const inches = [12, 24, 36, 48, 60];
const feet = inches.map(inch => inch / 12);
console.log(feet);
//day 2 exercise 2
let shopItems = [{
        id: 1,
        name: "Air Max 97",
        price: 130.0,
        desc: "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
        category: "shoes",
    },
    {
        id: 2,
        name: "Adidas NMD R1",
        price: 128,
        desc: "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
        category: "shoes",
    },
    {
        id: 3,
        name: "Gucci Oversize T-shirt with Interlocking G",
        price: 580,
        desc: "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
        category: "shirts",
    },
    {
        id: 4,
        name: "Nike Sportswear Club",
        price: 18.97,
        desc: "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
        category: "shirts",
    },
    {
        id: 5,
        name: "Spanx Flare Jeans, Vintage Indigo",
        price: 148,
        desc: "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
        category: "pants",
    },
    {
        id: 6,
        name: "Bonobos Premium Stretch Jeans",
        price: 69,
        desc: "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
        category: "pants",
    },
];
shopItems.forEach(item => {
    console.log("=======================================");
    console.log("Name: \t", item.name);
    console.log("Price: \t", item.price);
    console.log("About: \t", item.desc);
    console.log("Category: ", item.category);
    console.log("=======================================");
});
//day 2 exercise 3
function reverseString(str) {
    return str.split('').reverse().join('');
}

let testString1 = "Hello World";
let testString2 = "test test 123";

console.log(reverseString(testString1)); // Output: "dlroW olleH"
console.log(reverseString(testString2)); // Output: "321 tset tset"
//day 2 exercise 4
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let testArr1 = ['Chicago', 'New York', 'Miami', 'New York', 'Chicago', 'Miami', 'Chicago', 'New York', 'Chicago'];
let uniqueArr = removeDuplicates(testArr1);
console.log(uniqueArr); // Output: ['Chicago', 'New York', 'Miami']

//day 3 exercise 1
class Account {
    constructor(accountNumber, currentBalance, owner) {
        this.accountNumber = accountNumber;
        this.currentBalance = currentBalance;
        this.owner = owner;
    }

    deposit(amount) {
        this.currentBalance += amount;
    }

    withdraw(amount) {
        if (amount <= this.currentBalance) {
            this.currentBalance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

class CheckingAccount extends Account {
    constructor(accountNumber, currentBalance, owner, overdraftLimit) {
        super(accountNumber, currentBalance, owner);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= this.currentBalance + this.overdraftLimit) {
            this.currentBalance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, currentBalance, owner, interestRate) {
        super(accountNumber, currentBalance, owner);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.currentBalance * (this.interestRate / 100);
        this.currentBalance += interest;
    }
}
//day 3 exersise 2
function getMovieInfo(movieName) {
    return new Promise((resolve, reject) => {
        if (movieName.length > 5) {
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}
async function printMovieInfo(movieTitle) {
    try {
        const movie = await getMovieInfo(movieTitle);
        console.log("Movie Information:");
        console.log("Title:", movie.title);
        console.log("Director:", movie.director);
        console.log("Runtime:", movie.runtime);
        console.log("Description:", movie.description);
    } catch (error) {
        console.warn("Error:", error);
    }
}
printMovieInfo('Indiana Jones and the Dark Knight');
printMovieInfo('ET');
//day 3 exersise 3
const checkingAccount = new CheckingAccount("123456789", 1000, "John Doe", 500);
checkingAccount.deposit(200);
checkingAccount.withdraw(1500);
checkingAccount.withdraw(150);
console.log("exersise 1 day3")
console.log(checkingAccount);
const savingsAccount = new SavingsAccount("987654321", 5000, "Jane Smith", 2);
savingsAccount.addInterest();
console.log(savingsAccount);

function backgroundChanger() {
    const body = document.querySelector('body');
    const currentColor = body.style.backgroundColor;
    if (currentColor === 'green') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'green';
    }
}