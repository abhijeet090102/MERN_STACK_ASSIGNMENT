// 1. Write a function that takes an array of numbers and returns the first and last elements of the array.
// function arrFirstLast(arr){
//     let first = arr[0]
//     let last = arr[arr.length-1];
//     // const [first,last] = arr;
//     return [first,last];
// };
// arr = [1,2,4,6,7,8];
// // const [firstItem , lastItem] = arrFirstLast(arr);
// // console.log(firstItem);
// // console.log(lastItem);
// console.log(arrFirstLast(arr));

// 2.  Write a function that returns a new array with each number squared using the map method.

// function arrSquare(arr) {
//     var sqare = arr.map((i) => Math.pow(i, 2));
//     return sqare;
// }
// arr = [1, 2, 4, 6, 7, 8];
// console.log(arrSquare(arr));

// 3. Explain the output of the following code snippet and why,
// console.log(foo); // when we start executing a program foo variable is undefined thats why it shows undefined
// var foo = "Hello, World!"; // when foo is intialize with var it treated as whole program first thats why no error shows during execution but in case of let it shows can't access foo
// console.log(foo); // it simply shows intialized value

// 4. Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.
// function mergeArray(arr1 , arr2 ){
//     var maArr = [...arr1,...arr2];
//     maArr = [19,...maArr];
//     return maArr;
// }
// arr = [1, 2, 4, 6, 7, 8];
// arr2 = [9,16];
// console.log(mergeArray(arr,arr2));

// 5. Given an array of objects representing users with name and age properties, write a function that returns an array of names of users who are over18.
// const users = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 15 }
//   ];
// function over18(obj){
//     var nameArr =[];
//     for (let i of obj){
//         if ( i.age > 18 ){
//         nameArr.push( i.name );
//         }
//         // nameArr.push( i.age > 18 ? i.name : null);
//     }
//     return nameArr;
// }
// console.log(over18(users));

// 6. Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.
// function arrSumProducts (arr){
//     const intialValue = {sum:0, product :1};
//     const result = arr.reduce((acc,num) => {acc.sum += num; acc.product *= num;
//         return acc;
//     },intialValue);
//     return result;
// }
// let arr = [2,4,5,6,7];
// var summary = arrSumProducts(arr);
// console.log(summary.sum);
// console.log(summary.product);

// 7. Write a function that returns the array sorted by the length of each string, in ascending order.
// function sortArr(arr){
//     const arrSort = arr.sort((a,b) => a.length - b.length );
//     console.log(arrSort);
// }
// // arr = ["Apple", "MAngo","Banana","Dragonfruit"];
// arr = ["hello", "world", "how", "are", "you"];
// sortArr(arr);

// 8. Given an array of numbers, write a function that returns the index of the first number that is greater than 10. If no such number exists, return -1. 
// function greaterNuma (arr){
//     for (let i =0 ; i<arr.length; i++){
//         if (arr[i] > 10) return i;
//     }
//     return -1;
// }
// let arr = [5,8,12,14];
// console.log(greaterNuma(arr));