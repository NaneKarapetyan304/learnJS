//object

//let userInfo = new Object(); //konstructor object
//let literalObject = {}; //literal object

// let userInfo = {
//     name: "Nane",  //key:"value"
//     age: 18,
//     "key with some words": true,
// };
//  console.log(userInfo);
//  console.log(userInfo.age);
//  console.log(userInfo["key with some words"]);

// let userInfo = {
//     name: "userName",
//     age: "18",
// };

//[] aravelutyunnery

// let key = "name";
// console.log(userInfo[key])

// let userInfo = {
//     name: "Nane",
//     age: 18,
//     address: {
//         city: "Vanadzor",
//         street: "Baghramyan",
//     }
// };

// console.log(userInfo.addres.city)

//properties from a variable

// function makeUserInfo(name, age){
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = makeUserInfo("Nane", 30);
// console.log(user);

//adding properties

// let userInfo = {
//     name: "Nane",
// };
// console.log(userInfo);

// userInfo.age = 30;
// console.log(userInfo);

// userInfo["likes JS"] = true;
// console.log(userInfo);

// userInfo.addres = {
//     city: "Vanadzor",
//     street: "Baghramyan",
// };
// console.log(userInfo);

// userInfo.age = 18;
// console.log(userInfo)

//object assign syntax

//Object.assign(where(object), what(property #1), what(property #2), ...);

// let userInfo = {
//     name: "Nane",
//     age: 18,
// }

// let user = Object.assign({}, userInfo);
// user.age = 17;
// console.log(userInfo);
// console.log(user);

//property existence check

// let userInfo = {
//     name: "Nane",
//     age: 18,
//     address: {
//         city: "Vanadzor",
//         street: "Baghramyan",
//     }
// }
// console.log(userInfo.age);

// if (userInfo.age){
//     console.log(userInfo.age);
// }

//operator in
// let userInfo = {
//     name: "Nane",
//     age: 18,
// }
// if ("name" in userInfo){
//     console.log(userInfo.name)
// }
    

//for in

//  let userInfo = {
//     name: "Nane",
//     age: 18,
//     address: {
//         city: "Vanadzor",
//         street: "Baghramyan",
//     }
//  }

//  for (let key in userInfo){
//     console.log(key);
//     console.log(userInfo[key]);
//  }

//object methods,this

// let userInfo = {
//     name: "Nane",
//     age: 18,
//     address: {
//         city: "Vanadzor",
//         street: "Baghramyan"
//     },
//     showInfo: function(){
//         console.log(`${userInfo.name},${userInfo.age} years old. address: city.${userInfo.address.city}, str:${userInfo.address.street}`)
//     } 
// }
// userInfo.showInfo();

//this

// let userInfo = {
//     name: "Nane",
//     age: 18,
//     address: {
//         city: "Vanadzor",
//         street: "Baghramyan"
//     },
//     showInfo(){
//         console.log(`${this.name},${this.age} years old, address: city. ${this.address.city}`)
//     }
// }
// userInfo.showInfo();

//constructor function

//1.starts with a capital letter
//2.the constructor function must be called using the operator "new"

function UserInfo(name) {
      //this = {}; stexcvum e datark object (undefined)

    this.name = name;
    this.age = 18;

     //return this; veradardznum e object(undefined)
};
console.log(new UserInfo('Nane'));
console.log(new UserInfo('Nona'));