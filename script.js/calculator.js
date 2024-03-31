
const input = document.getElementById('input')
const output = document.getElementById('output')

// Inch to Feet Calculation

function calculationITF() {
    const inch = input.value;
    console.log(inch);
    const feet = inch / 12;
    output.innerText = feet;
}
// Miles to KM Calculation

function calculationMTK() {
    const miles = input.value;
    console.log(miles);
    const km = miles * 1.609344;
    output.innerText = km;
}
// Celsius to fahrenheit Calculation

function calculationCTF() {
    const celsius = input.value;
    console.log(celsius);
    const fahrenheit = celsius * 1.8 + 32;
    output.innerText = fahrenheit;
}

// OE checker

function calculationOEC() {
    const numbers = input.value;
    console.log(numbers);
    const reminder = numbers % 2;
    if(reminder === 0) {
        output.innerText = `The Number ${numbers} is Even Number`;
    }
    else {
        output.innerText = `The Number ${numbers} is Odd Number`;
    }
}
// Leap Year checker

function calculationLY() {
    const year = input.value;
    console.log(year);
    
    if(year % 4 === 0  ) {
        return output.innerText = `The year of ${year} is Leap Year`;
    }
    return output.innerText = `The year of ${year} is not Leap Year`;
}



// git init
// git add README.md 
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Md-Zihadur-Rahaman/converter-calculator.git
// git push -u origin main