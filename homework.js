const name = "Kekambus_142";
const welcomeMsg = "Hello, " + name + "!";
console.log(welcomeMsg);

const temperatureC = 25;
const temperatureF = (temperatureC * 9/5) + 32;
function task2(){
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