// <---- Problem-1 ----->
// Takes three parameters, multiplies them, and returns the result

const multiply = (a, b, c) => a * b * c;
// example
const result = multiply(2, 3, 4);
console.log(result);



// <---- Problem-2 ----->
// uses the convenience of template literals to format the multiline string
const myself = `
I am a web developer,
I love to code,
I love to eat biriyani.`

console.log(myself);

// <---- Problem-3 ----->
// default parameter 

const addWithDefault = (num1, num2 = 10) => num1 + num2;

console.log(addWithDefault(5 , 20));

// <---- Problem-4 ----->
// checks if the length of each name is even, and then returns a new array containing the names with even lengths

const filterEvenLengthNames = (friends) => {
   return  friends.filter(name => name.length % 2 === 0);
  };
  
  const myFriends = ["rakib", "atik", "silent"];
  const evenLengthFriends = filterEvenLengthNames(myFriends);
  console.log(evenLengthFriends); 

// <---- Problem-5 ----->

// takes an array of numbers, squares each element, calculates the sum of squared elements, and then returns the average of the sum

const averageOfSqueredElements = (arr) => {
    const squaredElements = arr.map(num => num ** 2);
    const sumOfSqueredElements = squaredElements.reduce((sum, num) => sum + num , 0);
    const average = sumOfSqueredElements / arr.length;
    return average;
}

const numbers = [2, 3, 4, 5];
const results = averageOfSqueredElements(numbers);
console.log(results);

// <---- Problem-5 ----->
// Here's an arrow function that takes two arrays as inputs, combines them into a new array, and then finds the maximum number from the new combined array

const findMaxFromCombinedArrays = (arr1, arr2) =>{
    const combainedArray = [...arr1, ...arr2];
    const maxNumber = Math.max(...combainedArray)
    return maxNumber;
}

const array1 = [4, 15, 26, 7];
const array2 = [24, 45, 6, 27];
const maxNumber = findMaxFromCombinedArrays(array1 , array2);
console.log(maxNumber);

