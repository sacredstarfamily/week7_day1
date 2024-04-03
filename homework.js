const name = "Kekambus_142";
const welcomeMsg = "Hello, " + name + "!";
console.log(welcomeMsg);

const temperatureC = 25;
const temperatureF = (temperatureC * 9 / 5) + 32;

function task2() {
    if (temperatureF > 80) {
        console.log("It's a hot day!");
        alert("It's a hot day!")
    } else {
        console.log("It's not too hot today.");
        alert("It's not too hot today.")
    }
}


let count = 0;
while (count <= 50) {
    console.log(count);
    count += 5;
}

function task1() {
    alert("Hello, " + name + "!");
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