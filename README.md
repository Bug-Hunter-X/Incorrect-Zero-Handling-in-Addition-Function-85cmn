# Incorrect Zero Handling in Addition Function

This repository demonstrates a common, subtle bug in JavaScript: incorrect handling of zero inputs in a simple addition function.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected version.

The bug stems from a flawed conditional statement.  The function prematurely returns 0 when either input is 0, even though addition with 0 should simply return the other number.  The solution corrects the conditional logic to appropriately handle zero inputs.