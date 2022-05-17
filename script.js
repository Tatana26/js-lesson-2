function numbers(...arguments) {
    let positiveNumbers = 0 ; 
    for (let x of arguments) {
        if ( x > 0 ){
            positiveNumbers += x;
        }
    }
    return positiveNumbers
}

let sum = numbers(-2, 2, -5, 10, 15, 50, -6, 12);
console.log(sum);

function numbers (...arguments) {
    let sum = 0; 
    for (let x of arguments) {
        sum = sum + x
    }
    return sum
}

let numbersSum = numbers(10, 15, 20, 25, 35, 50);
console.log(numbersSum);

let user = {
    firstName: 'giorgi',
    lastName: 'saakadze',
    age: 20,
    isLoggedIn: true 

}

function userName () {
    if (user.isLoggedIn == true) {
        console.log('giorgi' + ' ' + 'saakadze');
    } else if (user.isLoggedIn == false) {
        console.log(false);
    }
}

userName();


// 4 
// ???
    

   


