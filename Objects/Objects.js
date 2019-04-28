/// OBJECTS

// 1. What are the seven basic data types in Javascript?



// 2. The first six data types (not objects) are all referred to as “primitive” data types. Why isn’t an object a “primitive” data type?



// 3. How do we create an object literal? ('object literal' refers to objects as we have learned them) What are the parts of an object?


// 4. What am I referring to when I say.... PROPERTY ..... KEY ...... VALUE?

//PROPERTY:
//KEY:
//VALUE:

//5. How do we use DOT NOTATION to access the firstName value in the following object?

let user = {
  firstName: "Tom",
  lastName: "Smith",
  age: 30
};

//6. How do you add a property to this object? For example, if we want to add the property 'married' and equate it to 'false'?

//7. What will happen if I try to access a property that isn't there? For example, if I type the following:

console.log(user.birthday);

//8. What is the other way to access a property in an object (besides using dot notation)?


//PRACTICE - DOT NOTATION

const dress = {
  id: 5,
  name: "Spring Flowers Dress",
  color: "blue",
  size: "3T",
  price: 30.0
};

  //Access the size property. Use console.log.
  
  //Use dot notation to change the price of this dress.

  //Create a variable called 'monthly special' and assign it to the name property of this dress object.
 
  //Add a new property called 'monthly special' and assign it to the name property of this dress object.
 

//PRACTICE - BRACKET NOTATION

const skirt = {
  id: 12,
  name: "Yellow Daisies Skirt",
  "type of fabric": "white flowers on yellow",
  "long or short": "short",
  price: 35.0
};

//Use bracket notation to change the price of the skirt
//Access the type of fabric property. Use console.log.

// NOTE: With bracket notation, property names must be in quotes (single or double).




//DOT NOTATION VERSUS BRACKET NOTATION

var myObj = {
  1: 'one',
  two: 2,
  three: 3,
  4: 4
}

var myNumber = 'three'

//9. Why can't we use dot notation in the following way to access 'one':


myObj.1

//10. Why can't we use the following to access 'three'?


myObj.myNumber

//NOTE: When using dot notation, the word after the dot is the literal name of the property. When using bracket notation, the expression between the brackets is EVALUATED to get the property name.


//METHODS AND CREATING WITH FUNCTIONS

//11. What is a method?  



//12. How do we add a method to the following object? Create a method that calculates Texas sales tax (6.25%) and adds it to the total price.

const product = {
  productID: 012,
  price: 12.00,
  priceWithTax: 0
}