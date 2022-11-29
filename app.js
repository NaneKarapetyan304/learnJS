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
// console.log(str.repeat(2))