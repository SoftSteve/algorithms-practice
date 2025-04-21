// Write a recursive function to compute the factorial of a non-negative integer n.

/* 
    - A factorial is a mathematical operation that you write like n!. It is the product of all positive integers less than or equal to n. It represents the multiplication of all numbers between 1 and n.
        ie. if n is 3!, for example, you'd compute 3 * 2 * 1. 

    NOTES:
        - im taking a non negative integer n and multiplying all numbers from n down to 1. 
        - base case = if n is equal to 0 there are no more numbers to multiply by. return 1. 
        - until base case is met n * (n - 1)
*/

function factorial(n) {
    if (n === 0) {
        return 1;
    } 
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));