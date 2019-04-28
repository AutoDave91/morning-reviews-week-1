/// OBJECTS

// 1. What are the seven basic data types in Javascript?
////////////ANSWER: number, string, boolean, null, undefined, symbol, object


// 2. The first six data types (not objects) are all referred to as “primitive” data types. Why isn’t an object a “primitive” data type?
////////////ANSWER: Objects are used to store collections of data. They are more complex. The primitive data types only store a single value, but objects can store many values.


// 3. How do we create an object literal? ('object literal' refers to objects as we have learned them) What are the parts of an object?
////////////ANSWER: Declare with a variable and equal sign, use curly braces, declare key and value separated by colon (key value pair is one property). Separate properties with commas


const student = {
    name: 'Jenny', 
    school: 'UCLA', 
    semester: 2, 
    major: 'Chemical Engineering'
  }

// 4. What am I referring to when I say.... PROPERTY ..... KEY ...... VALUE?

////////////ANSWER:
//PROPERTY: A property is a key-value pair. The key is a string and the value can be any data type.
//KEY: A name or identifier for the property. It is a string, even though we don't always write the quotation marks (but you can)
//VALUE: Can be a string, number, boolean, array, other object, etc

//5. How do we use DOT NOTATION to access the firstName value in the following object?

let user = {
    firstName: "Tom",
    lastName: "Smith",
    age: 30
  };

  ////////////ANSWER:  
  user.firstName
  user['firstName']
  
  //6. How do you add a property to this object? For example, if we want to add the property 'married' and equate it to 'false'?
  ////////////ANSWER:  
  user.married = 'false'
  user['married'] = 'false'
  
  //7. What will happen if I try to access a property that isn't there? For example, if I type the following:
  
  console.log(user.birthday);
  ////////////ANSWER:  We will get 'undefined'
  
  //8. What is the other way to access a property in an object (besides using dot notation)?
  ////////////ANSWER:  Square bracket notation
  
  //PRACTICE - DOT NOTATION
  
  const dress = {
    id: 5,
    name: "Spring Flowers Dress",
    color: "blue",
    size: "3T",
    price: 30.0
  };
  
  //Access the size property. Use console.log.
  ////////////ANSWER:  
  console.log(dress.size)
  
  //Use dot notation to change the price of this dress.
  ////////////ANSWER:  
  dress.price = 35.00
  
  //Create a variable called 'monthly special' and assign it to the name property of this dress object.
  ////////////ANSWER:  
  let monthlySpecial = dress.name
  //NOTE - this is not a property on the object. It is just a variable which we have declared and defined.

  //Add a new property called 'monthly special' and assign it to the name property of this dress object.
  dress.monthlySpecial = dress.name
  
  //PRACTICE - BRACKET NOTATION
  
  const skirt = {
    id: 12,
    name: "Yellow Daisies Skirt",
    "type of fabric": "white flowers on yellow",
    "long or short": "short",
    price: 35.0
  };
  
  //Use bracket notation to change the price of the skirt
    ////////////ANSWER:  
    skirt['price'] = 40.00


  //Access the type of fabric property. Use console.log.
  console.log(skirt['type of fabric'])

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

  ////////////ANSWER: We can't use numbers with dot notation. We have to use brackets with numbers to access this type of property name.
  
  //10. Why can't we use the following to access 'three'?
  
  myObj.myNumber
  
    ////////////ANSWER: We haven't created a property called 'myNumber' in the object itself. If we want to access 'three' with myNumber, we need to use bracket notation because when we use bracket notation, javascript doesn't read the exact literal name in the brackets but instead evaluates it. 

  //NOTE: When using dot notation, the word after the dot is the literal name of the property. When using bracket notation, the expression between the brackets is EVALUATED to get the property name.
  
  
  //METHODS AND CREATING WITH FUNCTIONS
  
  //11. What is a method? 
  ////////////ANSWER: A method is a function
  
  //12. How do we add a method to the following object? Create a method that calculates Texas sales tax (6.25%) and adds it to the total price.
  

  const product = {
    productID: 012,
    price: 12.00,
    priceWithTax: 0,
    salesTaxTexas: function(){product.priceWithTax = (product.price * .0625)+ product.price}
    
  }
  
  product.salesTaxTexas()
  console.log(product.priceWithTax)