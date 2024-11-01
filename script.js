function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"



function countCharacters(str) {
    return str.length;
}

// Example usage:
console.log(countCharacters("hello")); // Output: 5


function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"


function findMax(arr) {
    return Math.max(...arr);
}

// Example usage:
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5


function findMin(arr) {
    return Math.min(...arr);
}

// Example usage:
console.log(findMin([1, 2, 3, 4, 5])); // Output: 1


function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage: Filtering out numbers greater than 3
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); // Output: [4, 5]


function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // 0! is 1
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120


function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(4)); // Output: false


function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n); // Return the sequence up to n terms
}

// Example usage:
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
