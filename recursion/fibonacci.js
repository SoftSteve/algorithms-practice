// write a recursive function to compute the nth fibonacci number
/*
    - in mathematics, the Fibonacci sequence is a sequence in which each element is the sum of the two elements that precede it.
    Numbers that are a part of the Fibonacci sequence are known as Fibonacci numbers. start with a sequence of 0, 1, ...

    NOTES:
        - Fibonacci numbers may be defined by the recurrence relation
            ie. f(n) = f(n - 1) + f(n - 2)
        - Base Case: if fibonacci starts with sequence of 0, 1, test if f(0) = 0 and f(1) = 1 sequentually. 
        - otherwise return the sum of the two previous values
            ie. f(7) is calculated as f(6) + f(5) which returns 8 + 5 = 13 
*/

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(7));
