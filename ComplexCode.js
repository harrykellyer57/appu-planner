/* Filename: ComplexCode.js */

// This code performs a complex mathematical operation called the "Collatz Conjecture"
// The Collatz Conjecture states that for any positive integer n, the sequence:
// n → n/2 (if n is even)
// n → 3n + 1 (if n is odd)
// eventually reaches the number 1, regardless of the initial value of n.

function collatzConjecture(n) {
  // Create an array to store the sequence
  const sequence = [n];

  // Loop until n becomes 1
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2; // If n is even, divide it by 2
    } else {
      n = 3 * n + 1; // If n is odd, multiply it by 3 and add 1
    }

    sequence.push(n); // Add n to the sequence
  }

  return sequence;
}

// Test the Collatz Conjecture for a range of numbers
const rangeStart = 1;
const rangeEnd = 10;

for (let i = rangeStart; i <= rangeEnd; i++) {
  const sequence = collatzConjecture(i);
  console.log(`Collatz Conjecture for ${i}: ${sequence.join(' → ')}`);
}

// Output:
// Collatz Conjecture for 1: 1
// Collatz Conjecture for 2: 2 → 1
// Collatz Conjecture for 3: 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// Collatz Conjecture for 4: 4 → 2 → 1
// Collatz Conjecture for 5: 5 → 16 → 8 → 4 → 2 → 1
// Collatz Conjecture for 6: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// Collatz Conjecture for 7: 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// Collatz Conjecture for 8: 8 → 4 → 2 → 1
// Collatz Conjecture for 9: 9 → 28 → 14 → 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// Collatz Conjecture for 10: 10 → 5 → 16 → 8 → 4 → 2 → 1

// Additional complex code can be added below this section...