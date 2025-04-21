// Write a recursive function that returns all subsets of a given array.

/*
    - What is a subset? by definition: a part of a larger group of related things.
        simple ie. set[1, 2] is a subset of a larger set[1, 2, 3, 4, 5]
        ie2. a set of all even numbers is a subset of a set of integers. 

    - What is all subsets of a set (Powerset)? A power set is a set that containers all possible subsets of a given set, including the empty set and the set itself. 
        // https://byjus.com/maths/power-set/#:~:text=A%20power%20set%20is%20set,%2C%20%7B1%2C%202%7D%7D.
        ie. to calculate the number of sets present in a power set we have to use the formula: Number of sets in P(S) = 2**n where n is the number of element in set S.
    NOTES: 
        - for each element in the array we decide whether to include it in the current subset or exlude it
        - Base Case: when index goes beyond the length of the given array there are no other outcomes possible to create a subset. 
        - otherwise return [see comments] 
*/

const array = [1, 2, 3] // given array of elements

function getSubsets(arr) {
    result = [] // declare empty array that will hold all subsets

    function backtrack(index, current) { // index, which element were currently looking at, current, the subset were building up as we go.
        if (index === arr.length) { 
            result.push([...current]); // save subset into result 
            return;
        }
        
        current.push(arr[index]); // include current element in array. ie. index = 0, arr[0] = 1, current.push(1) -> current = [1], then recurse to the next index and keep building
        backtrack(index + 1, current)

        current.pop(); // exclude current element in array. this is where IF WE ALREADY TRIED IT DO NOT INCLUDE IT. remove last element. (pop undoes push) continue to the next index.
        backtrack(index + 1, current)
    }

    backtrack(0, []); // start the recursion at index of 0 with an empty subset.
    return result;
}

console.log(getSubsets(array))