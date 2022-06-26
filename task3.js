/*1. Understand array.map watching the code
array.map() is used to transform the arravy values.
Map will return the new array and will not edit the old or existing array.
*/

//2.Take an array = ['apple', 'oranges' , '', 'mango', '' , 'lemon]. Transform it into ['apple', 'oranges' , 'mango', 'lemon] using array maps
const fruits= ['apple', 'oranges' , '', 'mango', '' , 'lemon']
console.log(fruits.map(fruit => {if(fruit) return fruit;}).filter(fruit => fruit!==undefined))

/*3.How is hobbies const and it still doesnt error out when we add new elements to the array as in the video.
Objects and arrays are reference types. Therefore when we store an array in const hobbies we can edit the existing array without violating the rule the const must change. Reference types only stores the address pointing at the place where the array is stored and the pointer will not be changed by adding an element to array. The const hobbies just store the address and address will not be changed but the value at the address alone is getting changed.
*/ 

/*4.What according to you is spread opertor. Does spread operator create a new object or point to the same old object?
Spread operator ceates a new obkect instead of pointing to the address of same old object. In Spread operator we wont edit the original array but we create a new array with all the old values and the new values. Used to copy array/object to a new array/object. [...array] pulls out all the elements or objects. 
*/ 

/*5.What is rest operator.
Rest Operator is used to get multiple arguments/paraments and bundle them into an array. Eg: function c (...args) bundles all arguments/paraments to as an array named args
*/


/*What will be the output of this
1. 
const obj1 = {'key1': 1}
const obj2 = { ...obj1}
if(obj2 === obj1){console.log('same objects')}
else{console.log('different objects')}
console.log(obj1)
console.log(obj2)
Ans: 
different objects

2.
const obj1 = {'key1': 1 , 'key2' : 2}
const obj2 = { ...obj1, key1: 1000}
console.log(obj1)
console.log(obj2)
Ans:
{key1:1, key2:2}
{key1:1000, key2:2}
*/