  //1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    let arr2 = arr.map(function(num){
        return num * 2;
    });
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  //2) Take an array of numbers and make them strings
    function stringItUp(arr1){
    // your code here
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
    // your code here
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
    // your code here
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