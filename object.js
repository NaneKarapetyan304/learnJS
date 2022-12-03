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

// function UserInfo(name) {
//       //this = {}; stexcvum e datark object (undefined)

//     this.name = name;
//     this.age = 18;

//      //return this; veradardznum e object(undefined)
// };
// console.log(new UserInfo('Nane'));
// console.log(new UserInfo('Nona'));


//array
// let arr = [1,5];
// console.log(arr.length);
// arr[2] = 9;
// console.log(arr)

//      array methods
//      1)pop/push  shift/unshift
// let arr = [1,2,3,4,5];
// arr.push(6);  //verjic avelacnum e element
// console.log(arr);

// arr.pop();   //verjic jnjum e verjin elementy
// console.log(arr);

// arr.shift(); //jnjum e arajin elementy
// console.log(arr);

//arr.unshift(5);
//console.log(arr); //skzbic avelacnum e element

//matrix

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[2][1])


// let arr2 = [
//     "Nane",
//     {
//         age: 18,
//         name: "Nane",
//     },
//     function (){
//         alert("Hello");
//     },
//     true,
// ];

// console.log(arr2[1].age);
// arr2[2]();

// let arr = [1,2,3,4];
// console.log(arr);

// let newArray = arr;
// newArray.length = 2;
// console.log(newArray);

//splice

//jnjum enq elementy

// let arrOne = [1, 2, 3, 4, 5, 6];
// arrOne.splice(1,3); //arajin tivy cuyc e talis ayn index-y vortexic sksum enq jnjel isk erkrordy te qani element enq jnjelu
// console.log(arrOne);

// veragrelov popoxakani jnjum enq ev verfadarcnum jnjvac elementy(nery);

// let arrTwo = [1, 2, 3, 4, 5, 6];
// let removed = arrTwo.splice(2,2);
// console.log(removed);

//popoxum enq elementnery

// let arrThree = [1, 2, 3, 4, 5, 6];

// arrThree.splice(0,1,'Nane'); //1-tivy index;2-tivy popoxvox elementneri qanak;3-y te inchov enq poxelu mer elementy
// console.log(arrThree);

//avelacnel element

// let arrFour = [1, 2, 3, 4, 5, 6];
 
// arrFour.splice(1, 0, 'Nane', 'Karapetyan');//1-tivy ayn indexn e voric heto avelacnum enq,0-nshanakum e vor avelacnum enq hakarak depqum kjnjvi,heto grum enq ayn inch avelacnelu enq
// console.log(arrFour);

//jnjum enq verji element;

// let arrFive = [1, 2, 3, 4, 5, 6];

// arrFive.splice(-1,1); //-1-nshanakum e sksum enq verjic
// console.log(arrFive);


//  slice

//copy enq anum arrayi masy kam amboxjy

// let arrOne = [1, 2, 3, 4, 5, 6];

// let arrTwo = arrOne.slice(1,2);
// console.log(arrTwo)

//concat    

//let arr = ['Nane', 'Nona', 'Nare'];
//let arrTwo = arr.concat('Mane'); //nshelov 'Mane' concaty avelacrec ayn u copy arec mnacacy
//console.log(arrTwo);

//let arr = ['Nane', 'Nona', 'Nare'];

//indexOf
//console.log(arr.indexOf('Nane'));
//console.log(arr.indexOf('Mane'));
//console.log(arr.indexOf('Nane', 2));

//lastIndexOf-nuynna bayc verjica sksum stugel

//includes (true and false)
//console.log(arr.includes('Nane'));
//console.log(arr.includes('Mane'));
//console.log(arr.includes('Nane', 2))

//find

// let arr = [
//     { name: 'Nane', age: 18 },
//     { name: 'Nona', age: 21 },
//     { name: 'Nare', age: 25 },
// ];

// let resultOne = arr.find(function(item, index, array) {
//     return item.age === 18 ;
// });

// console.log(resultOne);
// //veradarcnum e ayn arjeqy vory arajiny khamapatasxani paymanin

// //findIndex
// let resultTwo = arr.findIndex(function(item, index, array) {
//     return item.age === 18 ;
// });
// console.log(resultTwo);
// //veradarcnum e arajin paymanin havasar objecti index-y

// //filter

// let arr2 = [
//     { name: 'Nane', age: 18 },
//     { name: 'Nona', age: 21 },
//     { name: 'Nare', age: 25 },
//     { name: 'Mane', age: 12 },
// ];

// let resulThree = arr.filter(function(item, index, array) {
//     return item.age >= 18;
// });
// console.log(resulThree);

//pntrum e bolor arjeqnery voronq hamapatasxanum en paymanin u drancic sarqum array

//sort

//let arrOne = ['Nane', 'Nona', 'Mane'];
//console.log(arrOne.sort());

//let arrTwo = [1, 12, 35, 8];
//console.log(arrTwo.sort()); //(tvery darcnuma string)

//console.log(arrTwo.sort((a, b) => a - b));

//map

// let arr = ['Nane', 'NOna', 'Mane'];
// let result = arr.map(function(item, index, array) {
//     return item[0];
// });
// console.log(arr);
// console.log(result);

//split

// let str = 'Nane,Nona,Nare';

// let arr2 = str.split(',',2); //','-cuyc e talis bajanman masy 2-te qani andam e gcelu arrayi mej
// console.log(arr2);

// //join
// let arr3 = ['Nane', 'Nona', 'Nare'];
// let str2 = arr3.join(',');
// console.log(str2);

//forEach

// let arr = ['Nane', 'Nona', 'Nare'];
// arr.forEach(function(item, index, array) {
//     console.log(`${item} is in ${index} on ${array}`)
// });
// arr.forEach(show);
// function show(item){
//     console.log(item);
// };

//reduce

// let arr = [1, 2, 3]
// let reduceValueOne = arr.reduce(function(previousValue, item, index, array) {
//     return item + previousValue;
// }, 0);
// console.log(reduceValueOne);

