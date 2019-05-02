//////Callbacks

//Functions are objects, so they can be used the way we use other data types. We can do the following with functions:
/////1. pass it as a parameter into another function
/////2. store it in a variable, object, or array
/////3. return it from another function

///When we pass a function into another function as an argument, we are using a callback.

//1. In what types of situations would we want to use a callback function?

///When we want to have control over the timing of events. We can create function that when it is called, it waits a certain amount of time and then calls the callback. For example:

function sayHi() {
    alert('Hello');
  }

  setTimeout(sayHi, 1000);



 //////////////////////////////Review-Afternoon Project///////////////////////////////////////////////////// 

////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

//Code Here

const last = (arr, cb) => {
  return cb(arr[arr.length-1])
}


// Do not edit the code below.
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});
// Do not edit the code above.  



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

//Code Here 

// const contains = (arr, name, cb) => {
//   arr.includes(name)===true ? cb(true) : cb(false)
// }

function contains(arr, name, cb){
  for(let i=0; i<arr.length; i++){
    if(arr[i]===name){
      cb(true)
    } else{
      cb(false)
    }
  }
}

// Do not edit the code below.
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.


////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

//Code Here 

function each(arr, cb){
  for(let i=0; i<arr.length; i++){
    cb(arr[i], i)
  }
}

//using forEach:
// const each = (arr, cb) => {
// arr.forEach((name, index) => {cb(name, index)})
// }


// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
// Do not edit the code above.


////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here


const getUserById = (arr, id, cb) => {
  for(let i=0; i<arr.length; i++){
    if(users[i].id === id){
      return cb(users[i])
    }
  }
  }
  
  
  // Do not edit the code below.
  var users = [
    {
      id: '12d',
      email: 'tyler@gmail.com',
      name: 'Tyler',
      address: '167 East 500 North'
    },
    {
      id: '15a',
      email: 'cahlan@gmail.com',
      name: 'Cahlan',
      address: '135 East 320 North'
    },
    {
      id: '16t',
      email: 'ryan@gmail.com',
      name: 'Ryan',
      address: '192 East 32 North'
    },
  ];
  
  getUserById(users, '16t', function(user){
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
  });
  // Do not edit the code above.


  ////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

//Code Here

const uniq = (arr, cb) => {
  let newArr = []
  for(let i=0; i<arr.length; i++){
    if(newArr.indexOf(arr[i])===-1){
      newArr.push(arr[i])
    }
  }
  return cb(newArr)
  }
  
  
  // Do not edit the code below.
  uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
  });
  // Do not edit the code above.