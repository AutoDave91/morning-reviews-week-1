//ARRAYS

//1. What data type is an array?
////////////ANSWER: It is an object. The difference is that we don't need to state the key as a name, because we are not focused on naming the property but instead on giving the properties an order. Using an array allows us to identify the property by its index (the position of the value in the list of items, starting with zero).


//2. In what kind of situation would we choose to use an array over an object?
////////////ANSWER: We use arrays when we have very related data that needs to be kept track of by its order. Here's an example. In this example, the array contains image file names. We move through the array in order by each photo's index to view the photos:

// https://codepen.io/DZuz14/pen/XxKLVY

//3. How do we create an array?
////////////ANSWER: We declare a variable and assign data within square brackets to that variable. We can create an empty array, or we can put data inside it. Each piece of data (or element) is separated by a comma.

const myArray = []
const myFriends = ['Lindsay', 'Scott', 'Jen']

//4. What is an important fact to remember about how we number the elements in an array?
////////////ANSWER: When we number each element, we start with 0. So in the array above for 'myFriends', Lindsay is 0, Scott, is 1, Jen is 2 and it would continue on in this way.

//5. Here's an array of product ids:

const productIDs = [12, 16, 7, 2, 17, 8]

//How do I access the first element in the array?
////////////ANSWER: 
productIDs[0]

//How do I access the fifth element?
////////////ANSWER: 
productIDs[4]

//What if I don't know how long the array is? How can I access the last element in the array?
////////////ANSWER: 
productIDs[productIDs.length-1]
//NOTE: Javascript will evaluate whatever is inside the brackets to come up with a number, and then use that number as the index to access the element in the array.

//6. What is the length of the following array?

const stuffInMyBackpack = ['pencils', 'earbuds', 'snacks', 'laptop', 'some trash', 'chapstick']

////////////ANSWER: length= 6


//7. How can I access the last element in the array?
////////////ANSWER: 
stuffInMyBackpack[stuffInMyBackpack.length-1]

//NOTE: All arrays have the property length on them, which means we can use dot length (.length) to find the length of the array. Strings also have this property so you can use .length to find the length of a string.

//8. How can I change the first element to be 'pens' instead of 'pencils'
////////////ANSWER: 
stuffInMyBackpack[0] = 'pens'

//9. Which item in the array above is my favorite item?
var favoriteItem = 2
stuffInMyBackpack[favoriteItem]


//10. How do I add another item to the END of my array?

stuffInMyBackpack.push('hairbrush')

//11. How do I add another item to the BEGINNING of my array?

stuffInMyBackpack.unshift('hairbrush')

// /FOR LOOPS////////

//12. How do I write a basic for-loop?
////////////ANSWER:
    //step 1 - use keyword 'for' with parentheses and curly braces
        for (){}
    //step 2 - create a variable to iterate with. This can represent the index in an array, or it can just be a starting point. For now it is our starting point.
        for(let i = 0){}
    //step 3 - create a condition for your iteration. This tells the for loop when to stop. We will stop if 'i' is less than 10 (so we will stop at 9) Be sure to separate with semi-colons.
        for(let i= 0; i < 10){}
    //step 4 - increment the loop so we move up through each iteration of 'i'.
        for(let i=0; i < 10; i++){}
    //step 5 - tell the for-loop what to do as we loop through 0-9
        for(let i=0; i<10; i++ ){console.log(`We are at the ${i} iteration`)}

//13. How do I use a for-loop to put stuff in an empty array?
////////////ANSWER:
    //step 1 - Be sure to create the empty array!!
        const numsArray = []
    //step 2 - Write the for-loop and tell the loop to push (use push method) elements into the array:

    for(let i=0; i<10; i++){
        numsArray.push(i)
    }
    //Another example:
    const numsArray = []
    for(let i=0; i<10; i++){
           numsArray.push(`This is index ${i}`)
       }
   console.log(numsArray)

   //14. How do I use a for-loop to find odd numbers in an array?

   const randomNums = [6, 66, 4, 9, 3, 12, 5, 18, 22, 33, 1]

   for (let i=0; i<randomNums.length; i++){
       if(randomNums[i]%2 !=0){
           console.log(randomNums[i])
       }
   }

   //Another example that pushes the odd numbers into a new array:

   let oddNums = []
  
  for (let i=0; i<randomNums.length; i++){
       if(randomNums[i] % 2 !=0){
           oddNums.push(randomNums[i])
        
       }
        console.log( oddNums )  
   }

//ARRAY METHODS

//15. Which array method do I use if I want to REMOVE an item from the END of an array?
////////////ANSWER: .pop()

//16. Which array method do I use if I want to REMOVE an item from the BEGINNING of an array?
////////////ANSWER: .shift()

//17. What do you get when you call these methods? Do you get the array or do you get the removed element?
////////////ANSWER: You get the element.
//NOTE: to see the changed array, you have to console.log the array itself. Example:

const rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'purple']
rainbow.pop()
rainbow.shift()
console.log(rainbow)

//18. Do these two methods mutate the original array? 
////////////ANSWER: Yes! They mutate, or change, the original array.

//19. Which array method do you use if you want to REMOVE an item somewhere in the array?
////////////ANSWER: .splice()
//Example:

rainbow.splice(1, 1)
//NOTE: in the above example, the first number '1' is the index to start at, and the second number '1' is how many elements to remove.

//What do you get when you call the splice method? 
////////////ANSWER: We get the element that we spliced out.

//20. How do I use splice to insert an item into an array?
////////////ANSWER: Add a third element in the parentheses. It is the element you want to insert. Example:
const rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'purple']

rainbow.splice(1,1, 'unknown')

console.log(rainbow)
//returns: 
[ 'red', 'unknown', 'yellow', 'green', 'blue', 'purple' ]

//21. What method can I use to copy elements in an array?
////////////ANSWER: .slice()

//Example: 
const rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'purple']

console.log(rainbow.slice(1, 3))
//returns
[ 'orange', 'yellow' ]

//22. What happens if I put nothing in the parentheses?
////////////ANSWER: It copies the entire array

//23. Does .slice() change the original array?
////////////ANSWER:  No, it does not. It just copies elements.