
function isValid(s) {
    const stack = [];
    const matchingBrackets = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (matchingBrackets[char]) {
        if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("(]")); // Output: false
  console.log(isValid("([{}])")); // Output: true
  console.log(isValid("({[}]")); // Output: false
