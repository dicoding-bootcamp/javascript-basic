// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);

// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(2));

// function minMax(arrayOfNumbers) {
//     let currentMin = arrayOfNumbers[0];
//     let currentMax = arrayOfNumbers[0];
//     for (value of arrayOfNumbers) {
//         if (value < currentMin) {
//             currentMin = value;
//         } else if (value > currentMax) {
//             currentMax = value;
//         }
//     }

//     console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

// Funtion menggunakan pendekatan prototype
function Mail() {
    this.from = "pengirim@email.com";
};

Mail.prototype.sendMessage = function n (msg, to) {
    console.log(`You send message ${msg} to ${to} from ${this.from}`)
}

// pemanggilan

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@email.com')
