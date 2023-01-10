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

// arr.pop();   //jnjum e verjin elementy
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

//primitive methods 

//number
//      1)floor / round /celi / to fixed
//console.log(Math.floor(5.27)) ; //5 misht depi nerqev e kloracnum
//console.log(Math.round(5.27));  //5 ete 0.5-ix mec e mecacnum e mekov ete poqr vercnum amboxj masy
//console.log(Math.ceil(5.27));  //6 misht depi verev e kloracnum 

//const num = 123.456;
//console.log(num.toFixed(0)); //123;
//console.log(num.toFixed(1)); //123.5;
//console.log(num.toFixed(2)); //123.46;

//      2)random / max / min / pow / **
//Math.random(); //veradarcnum e 0-1 mijakayqi patahakan amboxj tiv;
//console.log(Math.max(23,35,64,79,502));

//console.log(Math.pow(3, 3)); // == 3**3;
//      3)parseInt/parseFloat/+
//const strNum = '125.63';
//const strNumToNum = parseInt(strNum);
//console.log(strNum);
//console.log(strNumToNum);

//console.log(typeof(strNum));
//console.log(typeof(strNumToNum));
//parseFloat-y nuynn e bayc amboxj masy nuynpes darcnum e tiv,bayc erkusn el kashxaten miayn ayn jamanak erb string-y sksum e tvov

//      4)isNan / isFinite

//const num = 4886;
//isNaN(num); //true if num is NaN
//isFinite(num); //true when not a NaN and not a +- infinity;
//console.log(isNaN(num));
//console.log(isFinite(num));

//string
//      5)toLowerCase / toUpperCase
//const str = "Nane";
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());

//      6).lenght
//Math.random(); //veradarcnum e 0-1 mijakayqi patahakan amboxj tiv;
//console.log(Math.max(23,35,64,79,502));

//console.log(Math.pow(3, 3)); // == 3**3;
//      3)parseInt/parseFloat/+
//const strNum = '125.63';
//const strNumToNum = parseInt(strNum);
//console.log(strNum);
//console.log(strNumToNum);

//console.log(typeof(strNum));
//console.log(typeof(strNumToNum));
//parseFloat-y nuynn e bayc amboxj masy nuynpes darcnum e tiv,bayc erkusn el kashxaten miayn ayn jamanak erb string-y sksum e tvov

//      4)isNan / isFinite

//const num = 4886;
//isNaN(num); //true if num is NaN
//isFinite(num); //true when not a NaN and not a +- infinity;
//console.log(isNaN(num));
//console.log(isFinite(num));

//string
//      5)toLowerCase / toUpperCase
//const str = "Nane";
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());

//      6).lenght // not a function
//const strLong = "StirngLenght";
//console.log(strLong.length);

//      7)[0] / charAt(0)

//console.log(strLong[0]);
//console.log(strLong[3])

//      8)slice / (substring / substr)

//const str = "Hello world";
//console.log(str.slice(0, 5));

//      9)indexOf / lastIndexOf / includes

// const str = "Hello my friend";
// console.log(str.indexOf("my"));
// console.log(str.lastIndexOf("e"));

// console.log(str.includes("sdxvgisl")); //false
// console.log(str.includes("Hello")); //true

//      10)split / join
// const textStr = 'hello world';
// const res = textStr.split(' ');
// console.log(res);

//      11)trim
//const str = " hello     ";
//console.log(str)
//console.log(str.trim())

//      12)repeat
// const str = "hello world";
// console.log(str.repeat(2));

//Generator

// function* strGenerator() {
//     yield 'H';
//     yield 'e';
//     yield 'l';
//     yield 'l';
//     yield 'o';
// }

// const str = strGenerator();
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// function* numGenerator(n) {
//     for (let i = 0; i < n ; i++){
//         yield i;
//     }
// } 
// const num = numGenerator(8);

// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());

// for (let k of [1, 2, 3, 4]) {
//     console.log(k)
// }

// Map and Set //WeakMap and WeakSet

// let map = new Map([
//     ['Nane', 18],
//     ['Nona', 22],
//     ['Nare', 20]
// ]);
// for (let age of map.values()) {
//     console.log(age)
// };
// for (let name of map.keys()) {
//     console.log(name)
// }


//map.set('1', 'str1');
//map.set(1 , 'num1');
//map.set(false, 'bool1');

//console.log(map.get('1'));
//console.log(map.has(false));
//console.log(map.size);
//console.log(map.entries());

//Set
// let set = new Set();

// let nane = { name: 'Nane' };
// let nona = { name: 'Nona' };
// let nare = { name: 'Nare' };
// let mane = { name: 'Mane' };

// set.add(nane);
// set.add(nona);
// set.add(mane);
// set.add(nare);
// set.add(nane);
// set.add(nona);

// console.log(set.size);

// for (let user of set) {
//     console.log(user.name);
// };

// let weakmap = new WeakMap();
// let obj = {};
// weakmap.set(obj, 'ok');

// //WeakMap-i key-ery object-ner en

// let nane = { name: 'Nane'}; 
// let weakmap2 = new WeakMap();
// weakmap2.set(nane,"...");

// //nane = null; //nane obj-n kjnjvi hishoxutyunic
// console.log(weakmap2.get(nane));
// console.log(weakmap2.has(nane));


//Object.keys,values,entries

let obj = {
    name: 'Nane',
    age: 18,
};
console.log(Object.keys(obj)); //veradardznum e key-ery masivi mej
console.log(Object.values(obj)); //veradardznum e value-ery masivi mej
console.log(Object.entries(obj)); //veradardznum e array vori mej arraynerow key:value -nern en
