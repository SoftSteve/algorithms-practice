/* ---------------------Recursive Countdown------------------------*/
// create a function that counts down from some number (n) to 1


let number = 10

function countdown(n) {
    if (n <= 0 ) {
        console.log('blast off');
    }
    else {
        console.log(n)
        countdown(n - 1)
    }
};

countdown(number)