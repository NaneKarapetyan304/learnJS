//ARCADE INTRO

//1)Write a function that returns the sum of two numbers.
/*
    function solution(param1, param2) {
        return param1+param2
    }
*/

//2)Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

/*
    function solution(year) {
        return Math.floor(year/100) + (year % 100 ? 1 : 0)
    }
*/

//3)Given the string, check if it is a palindrome.

/*
    function solution(inputString) {
        let reversedString = inputString.split('').reverse().join('');

        return inputString==reversedString
    }
*/

//4)Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

/* 
    function solution(inputArray) {
        let product = inputArray[0] * inputArray[1];
    
        for(let i = 1; i < inputArray.length-1; i++){
            if(inputArray[i] * inputArray[i + 1] > product){
                product = inputArray[i] * inputArray[i + 1];
            }
        }
        return product
    }
*/

//5)Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

/*
    function solution(n) {
        return n==1?1:(n*n+((n-1)*(n-1)))
    }    
*/ 

//6)Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

/*
    function solution(statues) {
        const arr = statues.sort((a,b) => a-b);
        let a = arr[arr.length-1] - arr[0] + 1;  

        return a - statues.length
}
*/

//7)Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

//Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

/* 
    function solution(sequence) {
        let a = 0;

        for(let i = 0; i < sequence.length-1; i++){
            if(sequence[i] >= sequence[i+1]){
                a += 1;
                if(sequence[i] >= sequence[i+2] && sequence[i-1]>= sequence[i+1]){
                    return false
                }
            }
            if(a >= 2){
                return false;
            }
        }
        return true;
    }
*/

//8)After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

//Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

/*
    function solution(matrix) {
        let sum = 0;

        for(let i = 0; i < matrix[0].length; i++){
            for(let j = 0; j < matrix.length; j++){
                if(matrix[j][i] === 0 ){
                    break
                }
                sum+= matrix[j][i]
            }
        }
        return sum;
    }
*/

//9)Given an array of strings, return another array containing all of its longest strings.

/*
    function solution(inputArray) {
    let arr1=[]
    let maxLength=0;
    let arr = inputArray.map(function(item){
        return item.length;
    });    
    for(let i = 0; i < arr.length; i++){
        if(maxLength < arr[i]){
            maxLength = arr[i]
        }
    };
    inputArray.forEach(function(item){
        if(item.length === maxLength){
            arr1.push(item);
        }
      
    })
    return arr1
}
*/

//10)Given two strings, find the number of common characters between them.

/*
    function solution(s1, s2){
        let arr1 = s1.split('');
        let arr2 = s2.split('');

        const obj2 = arr2.reduce((prev, next) => {
            if(prev[next]) {
                return {...prev, [next]: prev[next] + 1}
            } else {
                return {...prev, [next]: 1}
            }
        },{}); 
        const obj1 = arr1.reduce((prev, next) => {
            if(prev[next]) {
                return {...prev, [next]: prev[next] + 1}
            } else {
                return {...prev, [next]: 1}
            }
        },{});
        let count = 0;

        Object.keys(obj1).forEach(function(item){
            if(obj1[item] && obj2[item]){
                count += Math.min(obj1[item], obj2[item])
            }
        });
     return count
}
*/

//11)Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

//Given a ticket number n, determine if it's lucky or not.

/*
    function solution(n) {
        let length = n.toString().length/2;
        let arr = n.toString().split("");
        let firstSum = arr.slice(0,length).reduce((sum, current) => +sum + +current, 0);
        let secondSum = arr.slice(length,arr.length).reduce((sum,current) => +sum + +current,0);

        return firstSum === secondSum
    }
*/

//12)Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
/*
    function solution(a) {
        let arr = a.filter(item => item != -1);
        let indexArr = arr.sort((a,b)=> a-b)
        let i = -1;

        return a.map(value => {
            if(value == -1){
                return -1
            }
            i+=1
            return a = indexArr[i]
        })
    } 
*/

//13)Write a function that reverses characters in (possibly nested) parentheses in the input string.

//Input strings will always be well-formed with matching ()s.

/*
    function solution(inputString) {
        let a = inputString;

        while(a.includes('(')){
            let endQuote = a.indexOf(')');
            let startQuote = a.lastIndexOf('(',endQuote);
            let str = a.slice(startQuote+1, endQuote);
            let reversedStr = str.split('').reverse().join('');
            a = a.slice(0, startQuote) + reversedStr + a.slice(endQuote+1);
        }
        return a
    }
*/

//14)Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

//You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

/*
    function solution(a) {
        let firstTeamWeight = 0;
        let secondTeamWeigth = 0;

        for(let i = 0; i < a.length; i++ ){
            if(i % 2 == 0){
                firstTeamWeight += a[i];
            }else if(i % 2 != 0){
                secondTeamWeigth += a[i];
            }
        };
        let arr =  [firstTeamWeight , secondTeamWeigth] ;
        return arr
    };
*/

//15)Given a rectangular matrix of characters, add a border of asterisks(*) to it.[]

/*
    function solution(picture) {
        let asterisks =picture.map(function(item){
            return`*${item}*`
        });
        let arr =[];

        for(let i= 0; i< asterisks[0].length; i++){
            arr.push('*')
        }
        arr = arr.join('');
        asterisks.push(arr);
        asterisks.unshift(arr);
        return asterisks
    }
 */

//16)Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

//Given two arrays a and b, check whether they are similar.

/*
    function solution(a, b) { 
        let arr1 = a;
        let arr2 = b;
        if(a.length !== b.length) return false;
        for(let i = 0 ; i < a.length; i++){
            if(a[i] === b[i]){
                arr1.splice(i,1);
                arr2.splice(i,1);
                i--
            }        
        }
        if(arr1.length > 2 || arr2.length > 2 || arr1.length === 1 || arr2.length === 1) return false;
    
        if(arr1.length === 2){
            if(arr1[0] !== arr2[1] || arr2[0] !== arr1[1]) return false
        }
    
        return true
    
    }
*/

//17)You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

/*
    function solution(inputArray) {
        let count = 0;
    
        for(let i = 0; i < inputArray.length-1 ; i++){
            if(inputArray[i] >= inputArray[i+1]){
                count += inputArray[i]+1 - inputArray[i+1];
                inputArray.splice(i+1,1,inputArray[i]+1);
            }
        }
        return count
    }
*/

//18) Given a string, find out if its characters can be rearranged to form a palindrome.

//Example

//For inputString = "aabb", the output should be
//solution(inputString) = true.
//We can rearrange "aabb" to make "abba", which is a palindrome.

/*
    function solution(inputString) {
        let arr = inputString.split('');
        let a;
        let obj = arr.reduce(function(prev,next){
            if(prev[next]){
                return {...prev,[next]: prev[next] + 1} 
            } 
            return {...prev,[next] : 1};
        
        },{})
    
        a = Object.values(obj).filter(item => item % 2 === 1);
        return a.length <= 1
    }
*/

//19)Call two arms equally strong if the heaviest weights they each are able to lift are equal.

//Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

//Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

/*
    function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
        let strongestArm1,strongestArm2,weakest1,weakest2;
    
        if(yourLeft > yourRight){
            strongestArm1 = yourLeft;
            weakest1 = yourRight
        }else{
            strongestArm1 = yourRight;
            weakest1 = yourLeft
        };
    
        if(friendsLeft > friendsRight){
            strongestArm2 = friendsLeft;
            weakest2 = friendsRight
        }else{
            strongestArm2 = friendsRight;
            weakest2 = friendsLeft
        };

        if(strongestArm1 == strongestArm2 && weakest1 ==weakest2){
            return true;
        }else{
            return false;
        };
    
        if(yourLeft == yourRight){
            return true
        };
    }
*/


//20)Given an array of integers, find the maximal absolute difference between any two of its adjacent elements

/*
    function solution(inputArray) {
        let arr = [];
        let max ;
    
        for(let i = 0; i< inputArray.length; i++){
            arr.push(diff = inputArray[i]- inputArray[i+1]) 
        }
    
        let positiveNums = arr.filter(item => item>0);
        let negativeNums = arr.filter(item => item<0).map(item => -item);
        let allNums = positiveNums.concat(negativeNums).sort((a,b) => a-b);

        if(isNaN(allNums[allNums.length-1])){
            return 0
        }
        return allNums[allNums.length -1]
    
    }

*/



//21)An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

//Given a string, find out if it satisfies the IPv4 address naming rules.

/*
    function solution(inputString) {
        let output;
        const arr = inputString.split('.');
        if(arr.length == 4){
            output = arr.every(item =>{
                if(item >= 0 && item <= 255 && item != '' && item != '00' && item != '01'){
                    return true
                }
                return false
            })
            return output
        }
        return false
    }

*/

//22)You are given an array of integers representing coordinates of obstacles situated on a straight line.

//Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

//Find the minimal length of the jump enough to avoid all the obstacles.

/*
    function getMinJump(arr,count){
        for(let i = 0; i < arr.length; i++){
            if(arr[i]%count === 0) return getMinJump(arr,count+1)
        }
        return count
    }

    function solution(inputArray) {
        let arr = inputArray.sort((a,b) => a-b);
        let count = 2;
        return getMinJump(arr,count)
    }
*/


//23)Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

//The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

//Return the blurred image as an integer, with the fractions rounded down.

/*
    function solution(image) {
    let arr = [];
    
    for(let i = 0; i < image.length-2; i++){
        arr.push([])
        for(let j =0; j < image[0].length-2; j++){
            arr[i].push(Math.trunc((image[i][j]+image[i][j+1]+image[i][j+2]+ image[i+1][j]+image[i+1][j+1]+
                        image[i+1][j+2]+image[i+2][j]+image[i+2][j+1]+image[i+2][j+2])/9))
        }
        
    }
    return arr
}

*/

//24)In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

/*
    function solution(matrix) {
        let arr = [];
        for(let i = 0;i < matrix.length ; i++ ){
            arr.push([]);
            for(let j = 0; j < matrix[0].length; j++){
                let sum = 0;
                if(matrix[i-1]){
                    sum += !!matrix[i-1][j-1] + !!matrix[i-1][j] + !!matrix[i-1][j+1]
                };
                sum += !!matrix[i][j-1] +!!matrix[i][j+1] ;
                if(matrix[i+1]){
                    sum += !!matrix[i+1][j-1] + !!matrix[i+1][j] + !!matrix[i+1][j+1]
                }
                arr[i].push(sum)
            }
        }
        return arr
    }
*/

//25)Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

/*
    function solution(inputArray, elemToReplace, substitutionElem) {
        return inputArray.map(function(item){    
            return item===elemToReplace?substitutionElem:item
        })
    }

*/

//26)Check if all digits of the given integer are even.

//Example

//For n = 248622, the output should be
//solution(n) = true;
//For n = 642386, the output should be
//solution(n) = false.

/*
    function solution(n) {
        let arr = n.toString().split("");
        let trueitems = [];

        for(let i = 0; i<arr.length;i++){
            if(+arr[i]%2 == 0){
                trueitems.push(arr[i])
            }
        }
        return +trueitems.join("")==n
    }


*/


//27)Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

//Check if the given string is a correct variable name.

/*
    function solution(name){
        return /^[a-z_]\w*$/i.test(name)
    }
*/


//28)Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

/*
    function solution(inputString) {
        let arr = inputString.split("");
        let newArray = [];
    
        for(let i = 0; i<arr.length;i++){
            newArray.push((parseInt(arr[i], 36)-9)+1)    
        }
  
        let numberArray = newArray.map(function(item){
            if(item === 27){
                return String.fromCharCode(1+64)
            }else return String.fromCharCode(item+64)
        })
        return numberArray.join("").toLocaleLowerCase()
    }
*/

//29)Given two cells on the standard chess board, determine whether they have the same color or not.

/*
    function solution(cell1, cell2) {
        let arr = cell1.split("");
        let arr2 = cell2.split("");
        let sum1 = (parseInt(arr[0], 36)-9)+ +arr[1];
        let sum2 = (parseInt(arr2[0], 36)-9)+ +arr2[1];

        if(sum1%2==0 && sum2%2 ==0){
            return true 
        };
        if(sum1%2!==0 && sum2%2 !==0){
            return true
        };
        return false
}

*/

//30)Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

//Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

/*
    function solution(n, firstNumber) {
        return (firstNumber+n/2)%n
    }
*/

//31)You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

/*
    function solution(deposit, rate, threshold) {
        let year = 0;
        while( deposit+(deposit*rate/100)< threshold){
            deposit +=deposit*rate/100
            year +=1;
        }
        return year+1
    }

*/

//32)Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

//abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
//(where abs denotes the absolute value)

//If there are several possible answers, output the smallest one.


/*
    function solution(a) {
        let m = Math.floor(a.length/2)
        if(a.length%2 === 0){
            return a[a.length/2-1]
        }else{
            return a[m]
        }
    }
*/

//33)



//34)Given array of integers, remove each kth element from it.

/*
    function solution(inputArray, k) {
        let arr = inputArray.filter(function(item, index){
            return (index+1)% k !== 0
        })
        return arr
    }
*/

//35)Find the leftmost digit that occurs in a given string.

/*
    function solution(inputString) {
        let num = inputString.match(/[0-9]+/).toString().split("");
    
        return num[0]
    }

*/

//36)Given a string, find the number of different characters in it.

/*
    function solution(s) {
        let count = 0;
        let arr = s.split("");
        const newSet = new Set(arr);
        const uniqueElements = Array.from(newSet);

        for(let i = 0; i< uniqueElements.length; i++){
            if(uniqueElements[i] !== uniqueElements[i+1]){
                count+=1
            }
        }
        return count
    }
*/

//37)Given array of integers, find the maximal possible sum of some of its k consecutive elements.


/*
    function solution(inputArray, k) {
        let sum = 0;
        let max = 0;
    
        for(let i = 0; i<k ;i++){
            sum+=inputArray[i]
        }
        max += sum
        for(let i = k; i<inputArray.length; i++){
            sum -= inputArray[i-k]  ;
            sum += inputArray[i];
            if(sum > max){
                max = sum
            }
        }
        return max    
    }
*/

//38)Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

//Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.


/*
    function solution(upSpeed, downSpeed, desiredHeight) {
        let dayCount = 1;
        let diff = upSpeed-downSpeed;

        while(upSpeed<desiredHeight){
            upSpeed += diff; 
            dayCount+=1
      
        }
        return dayCount;
    }
 */

//39)


/*
    function solution(value1, weight1, value2, weight2, maxW) {
        if(weight1 + weight2 <= maxW){
            return value1+value2;
        }else if(weight1 <= maxW && weight2 > maxW){
            return value1
        }else if(weight2 <= maxW && weight1 > maxW){
            return value2
        }else if(weight1 > maxW && weight2 > maxW){
            return 0
        }else return value1>value2 ? value1: value2
   
    }
*/

//40) a string, output its longest prefix which contains only digits.

/*
    function solution(inputString) {
        let arr = inputString.split("").map(function(item){
            return parseInt(item, 10)
        });
        let numbersArray =[];
        for(let i = 0; i < arr.length; i++){
            if(!isNaN(arr[i])){
            numbersArray.push(arr[i]);
            }else{
                break
            }
        }
        return numbersArray.join("")
    }
*/

//41)Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

//Given an integer, find its digit degree.

/*
    function solution(n) {
        let count = 0;
        if(n.toString().length == 1){
            return count
        }else{
            while(true){
                count+=1;
                n = n.toString().split("").reduce((prev,next)=>{
                    return parseInt(prev) + parseInt(next)
                })
            
                if(n.toString().length === 1){
                    break
                }
            }
        }
        return count
   
    }
*/


//42)

/*

*/


//43)A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

//Given a string, check whether it is beautiful.


/*
    function solution(inputString) {
        let obj1={}
        for(let i = 97;i<=122;i++){
            obj1[String.fromCharCode(i)]=0
        }
        let arr = inputString.split("").sort();
        const obj = arr.reduce((prev, next) => {
            return {...prev, [next]: prev[next] + 1}
        },obj1);
        let values = Object.values(obj);
    
        for(let i = 1; i< values.length;i++){
            console.log(values[i],values[i-1],values[i]>values[i-1])
            if(values[i]>values[i-1])return false; 
        }
        return true
    }
*/


//44)An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

//The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

//Given a valid email address, find its domain part.

/*
    function solution(address) {
        let arr = address.split('@')
        return arr[arr.length-1]
    }

*/

//45)Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

/*
    function solution(st) {
        let i = 0;
        let arr;
        while(st !== st.split('').reverse().join('')){
            arr = st.split('')
            arr.splice(st.length-i, 0 ,st[i])
            st = arr.join('');
            i+= 1;
        }
        return st
    }
*/


//46)Elections are in progress!

//Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

//The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.


/*
    function solution(votes, k) {
        let maxVote = Math.max(...votes);
        let numMax = votes.filter(item=> item ===maxVote).length
        let output = votes.reduce((prev,next) => prev + (next===maxVote && numMax == 1 || next+k>maxVote? 1:0),0)
        return output
    }
*/

//47)A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

//The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

//Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

/*
    function solution(inputString) {
        let arr = inputString.split("-")
        let regExp = /^[A-F0-9]{2}$/;
        if(arr.length === 6){
            return arr.every((a)=>regExp.test(a))
        }else return false
    }

*/


//48)Determine if the given character is a digit or not.

/*
    function solution(symbol) {
        return Number.isInteger(+symbol)
    }
*/

//49)Given a string, return its encoding defined as follows:

//First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
//for example, "aabbbc" is divided into ["aa", "bbb", "c"]
//Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
//for example, substring "bbb" is replaced by "3b"
//Finally, all the new strings are concatenated together in the same order and a new string is returned.

/*
    function solution(s) {
        let count = 1;
        let str="";
    
        for(let i = 0;i < s.length;i++){
            if(s[i]=== s[i+1]){
                count+=1
            }else if(count === 1){
                str += s[i]
            }
            else{
                str += count+s[i];
                count = 1
            }
        }
        return str
    }
*/


//50)Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

//The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

/*

*/


//51)Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number

/*
    function solution(n) {
        let arr = n.toString().split("").map(Number);
        let a = arr.map((item,index)=> {
            let k = arr.slice();
            k.splice(index,1);
            return Number(k.join(""))
        })
        return Math.max(...a)
    }

*/


//52)Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

/*
    function solution(n) {
        let arr = n.toString().split("").map(Number);
        let a = arr.map((item,index)=> {
            let k = arr.slice();
            k.splice(index,1);
            return Number(k.join(""))
        })
        return Math.max(...a)
    }
*/


//53)Check if the given string is a correct time representation of the 24-hour clock.

/*
    function solution(time) {
        let houresAndMinutes = time.split(":");
        if(houresAndMinutes[0] < 24 && houresAndMinutes[1]<60){
            return true
        }else return false
    }
 */

//54)CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

//Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.


/*
function solution(inputString) {
    let sum = 0
    let reg = /\d+/g;
    let filteredNumbers = inputString.match(reg);
    if(filteredNumbers === null)return 0
    console.log(filteredNumbers)
    filteredNumbers.forEach(function(item){
        sum += +item
    })
    return sum
}

*/

//55)Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

/*
    function solution(matrix) {
        let arr = [];
        for(let i =1; i< matrix.length;i++){
            for(let j = 1; j < matrix[i].length; j++){
                if(a(i,j)){
                    arr.push([[matrix[i-1][j-1],
                            matrix[i-1][j]],
                            [
                               matrix[i][j-1],
                               matrix[i][j]
                              ]]);
                }
            }
        }   
        function a(i,j){
            return arr.every(c=>{
                    return c[0][0] !== matrix[i-1][j-1] ||
                        c[0][1] !== matrix[i-1][j] || 
                        c[1][0] !== matrix[i][j-1] ||
                        c[1][1] !== matrix[i][j]
            });
        }
        return arr.length;
    }
*/

//56)Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

/*
    function solution(product) {
        let arr = [];

        if(product == 0)return 10;
        if(product == 1) return 1;
    
        for(let i = 9; i>1;i--){
            while(product%i==0){
                product = product/i;
                arr.push(i)
            }
        }
    
        if(product>1)return -1;
        let output = arr.sort((a,b)=> a-b).join("");
        return +output
    }

*/

//57)You are given an array of strings names representing filenames. The array is sorted in order of file creation, such that names[i] represents the name of a file created before names[i+1] and after names[i-1] (assume 0-based indexing). Because all files must have unique names, files created later with the same name as a file created earlier should have an additional (k) suffix in their names, where k is the smallest positive integer (starting from 1) that does not appear in previous file names.

//Your task is to iterate through all elements of names (from left to right) and update all filenames based on the above. Return an array of proper filenames.


/*
    function solution(names) {
        let arr = []
        for(let i = 0; i < names.length; i++){
            if(!arr.includes(names[i])){
                arr.push(names[i]) 
            }else{
                for(let j=1;; j++) {
                    let str = `${names[i]}(${j})`
                    if (!arr.includes(str)) {
                        arr.push(str)
                        break
                    }
                }
            }
        }
        return arr
    }
*/


//58)You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

//Assuming that your hunch is correct, decode the message.

/*

    function solution(code) {
        let strings = [];
        let str = [];
        for(let i = 0; i< code.length;i+=8){
            strings.push(code.substring(i,i+8))
        }
        let outputStr = strings.map(function(item){
             return parseInt(+item,2);
        })
        for(let i = 0;i<outputStr.length;i++){
            str.push(String.fromCharCode(outputStr[i]))
        }
        return str.join("")
    }


*/

//59)Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

/*
    function solution(n) {
        let arr = Array.from({ length: n }, () => []);
        let row = 0;
        let column = 0;
        let rowEnd = n - 1;
        let columnEnd = n - 1;
        let counter = 1;
        
        while (column <= columnEnd && row <= rowEnd) {
            for (let i = column; i <= columnEnd; i++) {
                arr[row][i] = counter;
                counter++;
            }
            row++;

            for (let i = row; i <= rowEnd; i++) {
                arr[i][columnEnd] = counter;
                counter++;
            }
            columnEnd--;

            for (let i = columnEnd; i >= column; i--) {
                arr[rowEnd][i] = counter;
                counter++;
            }
            rowEnd--;

            for (let i = rowEnd; i >= row; i--) {
                arr[i][column] = counter;
                counter++;
            }
            column++;
        }
        return arr;
    }

*/

//60)Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

//This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

/*

*/

// ARCADE CORE


//1)You are given a two-digit integer n. Return the sum of its digits.

/*
    function solution(n){
        let firstDigit = parseInt(n/10);
        let secondDigit = n % 10;
        return firstDigit + secondDigit;
    }
*/

//2)Given an integer n, return the largest number that contains exactly n digits.

/*
    function solution(n) {
        let arr = [];
    
        for(let i = 0; i<n ;i++){
            arr.push(9)
        }
        return +arr.join("")
    }
*/

//3)n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

/*
    function solution(n, m) {
        let pieces = Math.trunc(m/n);
        return n*pieces
    }
*/

//4)Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

//The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

//Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

/*
    function solution(nCols, nRows, col, row) {
        let columns = nCols - col + 1;
        let rows = nRows - row;
    
        return columns*rows
    }
*/

//5)Given a divisor and a bound, find the largest integer N such that:

//N is divisible by divisor.
//N is less than or equal to bound.
//N is greater than 0.
//It is guaranteed that such a number exists.

/*
    function solution(divisor, bound) {
        let num = Math.floor(bound/divisor);
        return divisor*num
    }
*/

//6)Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

//Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

/*
    function solution(n, firstNumber) {
        return (firstNumber + n/2)%n
    }
*/

//7)One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

//When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

//Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

/*
    function solution(n) {
        let hours ;
        let minutes ;
        let sum =0;
        if( n % 60 == 0){
            return  n/60
        };
        if(n % 60 != 0){
            hours =  Math.floor(n/60).toString().split("").forEach(item => sum += +item);
            minutes = Math.floor(n % 60).toString().split('').forEach(item => sum += +item);
            return(sum)
        }
    }
*/

//8)Some phone usage rate may be described as follows:

//first minute of a call costs min1 cents,
//each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
//each minute after 10th costs min11 cents.
//You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

/*
    function solution(min1, min2_10, min11, s) {
        let time = 0;
        if(s >= min1){
		    time += 1;
            s -= min1
        }
        if (s >= min2_10) {
            let m = Math.min(9, s / min2_10)
		    time += m;
		    s -= min2_10 * m;
	    }
	    if (s >= min11) {
		    time += s / min11;
	    }
	    return Math.floor(time);
    }
*/

//9)You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.

//Given values experience, threshold and reward, check if you reach the next level after killing the monster.

/*
    function solution(experience, threshold, reward) {
        if(reward+experience >= threshold || experience>threshold){
            return true
        }else return false
    }

*/

//10)You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

//Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

/*
    function solution(value1, weight1, value2, weight2, maxW) {
        if(weight1 + weight2 <= maxW){
            return value1+value2;
        }else if(weight1 <= maxW && weight2 > maxW){
            return value1
        }else if(weight2 <= maxW && weight1 > maxW){
            return value2
        }else if(weight1 > maxW && weight2 > maxW){
            return 0
        }else return value1>value2 ? value1: value2
    }
*/

//11)You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

/*
    function solution(a, b, c) {
        if(a==b){
            return c
        }else if(b==c){
            return a;
        }else return b
    }
*/

//12)Given integers a and b, determine whether the following pseudocode results in an infinite loop

//while a is not equal to b do
  //increase a by 1
  //decrease b by 1
//Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

/*
    function solution(a, b) {
        if(a>b || a % 2 != b % 2)return true;
        else return false
    }
*/

//13)Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

/*
    function solution(a, b, c) {
        if(a + b == c || a*b ==c || a/b ==c || a-b ==c) return true
        else return false
    }
*/

//14)In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

//Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.

/*
    function solution(score1, score2) {
        let maxScore = Math.max(score1,score2);
        let minScore = Math.min(score1,score2);
    
        if(maxScore == 6 && minScore<5)return true
        else if(maxScore == 7 && minScore > 4 && minScore < 7)return true
        else return false
    }
*/

//15)Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

//Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

//A person contradicts Mary's belief if one of the following statements is true:

//they are young and beautiful but not loved;
//they are loved but not young or not beautiful.

/*
    function solution(young, beautiful, loved) {
        if(young && beautiful && !loved)return true
        else if(loved && (!young || !beautiful)) return true
        else return false
    }
*/

//16)You just bought a public transit card that allows you to ride the Metro for a certain number of days.

//Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. The 13th time you extend the pass, you get 31 days again.

//You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.

/*
    function solution(lastNumberOfDays) {
        if(lastNumberOfDays == 30 || lastNumberOfDays == 28)return [31]
        else return [28,30,31]
    }
*/