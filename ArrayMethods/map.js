  //1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    let arr2 = arr.map(function(num){
        return num * 2;
    });
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  //2) Take an array of numbers and make them strings

    function stringItUp(arr1){
        return arr1.map(function(item){
            item = String(item);
            return item
        })
    }

  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"];

  //3) Capitalize each of an array of names

  function capitalizeNames(arr){
    return arr.map(function(item){
        return item.substring(0,1).toUpperCase() + item.substring(1).toLowerCase();
    });
  };
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4)Make an array of strings of the names

  function namesOnly(arr){
      return arr.map(function(item){
          return item.name
      })
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

  //5) Make an array of strings of the names saying whether or not they can go to The Matrix

  function makeStrings(arr){
      return arr.map(function(item){
          if(item.age >= 18){
              return `${item.name} can go to The Matrix`
          }
          return `${item.name} is under age!!`;
      });
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  //6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
    return arr.map(function(item){
        return `<h1>${item.name}</h1><h2>${item.age}</h2> `
    });
    }
   console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

//7)Square the value of every element in the array. Presume that you will only get numbers in the input array.

function SquareValue(arr){
    return arr.map(function(num){
        return Math.pow(num,2);
    });
};
console.log(SquareValue([1, 2, 3, 4, 5]));

//8) Write the command to remove "Greg" from the array.

let peopleName1=["Greg", "Mary", "Devon", "James"];
let a = peopleName1.findIndex(item => item == "Greg");
peopleName1.splice(a,1);
console.log(peopleName1);

//9) Write the command to remove "James" from the array.

let peopleName=["Greg", "Mary", "Devon", "James"];
let i = peopleName.findIndex(item => item == "James");
peopleName.splice(i,1);
console.log(peopleName);

//10) Write the command to add "Matt" to the front of the array.

let names= ["Greg", "Mary", "Devon", "James"];
names.splice(0,0,'Matt');
console.log(names);

//11) Write the command to add your name to the end of the array.

let people = ["Greg", "Mary", "Devon", "James"];
console.log(people.concat("Nane"));

//12) Write the command that gives the indexOf where "Mary" is located.

function indexof(people){
   return people.findIndex(item => item == 'Mary');
};
console.log(indexof(["Greg", "Mary", "Devon", "James"]));

//13) Write the command that gives the indexOf where "Foo" is located (this should return -1).

let arr = ["Greg", "Mary", "Devon", "James"];
console.log(arr.indexOf("Foo"));

//14) Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

let arr1 = ["Greg", "Mary", "Devon", "James"];
arr1.splice(2,1,"Elizabeth","Artie");
console.log(arr1);

//15) Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

let people2 = ["Greg", "Mary", "Devon", "James"];
let withBob = people2.concat("Bob");
console.log(withBob);

//16)Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.

function printFirstAndLast(arr){
  return  arr.forEach(element => {
        return `${element.substring(0,1) + element.substring(0,-1)}`
    });
}
console.log(printFirstAndLast(['awesome','example','of','forEach']))

//17) Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
//1.What is the length of the array?
//2.Write a function called myAlphabetLength which console.logs the length of the array
//3.Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4

let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
console.log(myAlphabet.length);
function myAlphabetLength(){
    return myAlphabet.length;
    if(myAlphabet.length < 4){
        return "number of items within the array are less than 4"
    }
    else
    { return "number of items within the array are not less than 4"}
};
console.log(myAlphabetLength(myAlphabet))

//18)

// 1. What is the average income of all the people in the array?


// 2. Who are the people that are currently older than 30?


// 3. Get a list of the people's full name (firstName and lastName).

    const peopleNames = [
        { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
        { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
        { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
        { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
        { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
        { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
        { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
        { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
        { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
        { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
        { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
        { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
    ];

    function infoPeople(peopleNames){
        let sum = 0;   
        let length = peopleNames.length;
         peopleNames.forEach(function(item){
                sum+= +item.salary;
               
            })
            return sum/length;
        }
    
        function olderPeople(){
            return peopleNames.filter(function(item){
             if(item.DOB.split("/").at(-1)<1993){
                 return item.firstName ;
                }
            }).map(function(item){
                return item.firstName
            })
        }

    function fullName(peopleNames){
        return peopleNames.map(function(item){
            return `${item.firstName}  ${item.lastName}`
        })
    }

//19)create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(item => Number.isInteger(item)); 
}
console.log(filter_list([1,5,'a','b',NaN,'6']));
