// BMI Comparsion
// BMI = mas / height ^ 2

// var mas,height,kasunBMI,chamalBMI,isKasun;

// // Kasun
// mas = prompt('what is the mas of kasun: ');
// height = prompt('what is the height of kasun: ');
// kasunBMI = mas / (height ** 2);

// // Chamal
// mas = prompt('what is the mas of chamal: ');
// height = prompt('what is the height of chamal: ');
// chamalBMI = mas / (height ** 2);

// // Boolean
// isKasun = (kasunBMI > chamalBMI);

// // Alert
// alert(isKasun);


// -----------------------------------If Else

// variable declaration
// var a = prompt('what is the value of a:');
// var b = prompt('what is the value of b:');

// // ccondition
// if(a > b){
//     console.log('a is grater than b');
// }
// else if(a < b){
//     console.log('b is greter than a');
// }
// else{
//     console.log('a is equal to b');
// }


// ----------------------------------Comparison Operator




// Ternary Operator

// var num1,num2,boolean;

// // Get input for user
// num1 = prompt('input num1:');
// num2 = prompt('input num2:');

// // Condition
// boolean = num1 > num2 ? console.log('num1 is greter than num2') : console.log('num2 is greter than or equal to num1');

// // display
// console.log(boolean);


// -----------------------------------Logical Operator

// Switch Case

// var empName = 'Kasun';
// var jobRole = 'Engineer';

// switch(jobRole.toLocaleLowerCase()){
//     case 'teacher':
//         console.log(empName + ' is a Teacher');
//         break;
//     case 'doctor':
//         console.log(empName + ' is a Doctor');
//         break;
//     case 'engineer':
//         console.log(empName + ' is a engineer');
//         break;
//     case 'engineer':  // deken ekk hooo nam -> true
//     case 'professor':
//         console.log(empName + ' is a engineer or profesor');
//         break;
//     default:
//         console.log(empName + ' does something else');
//         break;
// }



// --------------------------------------------Bitwise Operator
// & , | , ~ , ^ , << , >> , >>>


// --------------------------------------------Convert decimal to binary
// console.log((10).toString(2));


// ------------------------------------------- Convert binary to decimal
// console.log((0b111110).toString(10));

// ---------------------------------
// console.log(parseInt('1010',2));



// wining team

// variable declaration
// var day01,day02,day03,avgSL,avgEND,win;

// // get input from user
// // first Sri-Lanka
// console.log('Sri-Lanka,');
// day01 = prompt('first day scored:');
// day02 = prompt('second day scored:');
// day03 = prompt('third day scored:');

// console.log(typeof(day01));

// avgSL = (parseInt(day01) + parseInt(day02) + parseInt(day03)) / 3;

// //second England
// console.log('England,')
// day01 = prompt('first day scored:');
// day02 = prompt('second day scored:');
// day03 = prompt('third day scored:');

// console.log(typeof(day01));

// avgEND = (parseInt(day01) + parseInt(day02) + parseInt(day03)) / 3;

// // check condition
// win = avgSL > avgEND ? 'Sri-Lanka' : 'England';
// winScore = avgSL > avgEND ? avgSL : avgEND;

// if(){

// }
// else if(){

// }
// else{

// }

// // display
// console.log(win + ' is wininig this series & '+winScore+' scored');


// day01 = parseInt(prompt('first day scores of sri lanka : '));
// console.log(day01);
// console.log(typeof(day01));

// day01 = prompt('first day scores of England : ');
// console.log(day01);
// console.log(typeof(day01));


// ------------------------------------------------Function

//  // without return
//  function addNumbers(num1,num2){
//     var ans = num1 + num2;
//     console.log('Addition is : '+ans);

//  }

//  // calling
//  addNumbers(3,1);

// with return
// function subNumbers(num1,num2){
//     return num1 - num2;

// }
//  // calling
// var ans = subNumbers(3,1);
// console.log('Subtraction : '+ans);


// var birthYear;

// birthYear = parseInt(prompt('input your birthyear : '));

// function calAge(birthYear){
//     return 2023 - birthYear;
// }

// function retiringYear(firstName,birthYear){
//     var age = calAge(birthYear);
//     var retire = 60 - age;
//     console.log(firstName+' retires in '+retire+' years, in '+(birthYear+age+retire));
// }

// // calling
// retiringYear('Kasun',birthYear);


// ---------------------------------Function Experession

// function declaration
// function functinName(para01,para02,para03,.....){}

// function experssion
// var profession = function(job,firstName){
//     switch(job.toLocaleLowerCase()){
//         case 'doctor':
//             return firstName+' is a doctor.';
//         case 'teacher':
//             return firstName+' is a teacher.';
//         default:
//             return firstName+' is doing somthing else.'
//     }
// }

// // calling
// console.log(profession('Doctor','Kasun'));
// console.log(profession('CEO','Chinthaka'));
// console.log(profession('Teacher','Parami'));



// ----------------------------------Array

// array declaration
// var marks = new Array(20,49,59,60,77,80); 

// // array defined
// var students = ['chinthaka','parami','nilanthi','lahiru','thilini'];

// // display array
// console.log(students);
// console.log(students[0]);

// // array length
// console.log(marks.length); 

// // array mutation
// students[1] = null;
// console.log(students[1]);

// // insert element to end
// students[students.length] = 'sadakalum';
// console.log(students);

// // different data types in array
// var std1 = ['chinthaka',22,'elahera'];
// console.log(std1);

// // add elements
// std1.push('undergraduated in UOM'); // insert at end
// std1.unshift('214189E'); // insert at beggine
// console.log(std1);

// // remove elements
// std1.pop(); // delete at end
// std1.pop(); 
// std1.shift(); // delete at beggine
// console.log(std1);

// // get index of element in an array
// console.log(std1.indexOf('chinthaka')); 

// // ---------------------
// var isAgriStuent = std1.indexOf('Agri') === -1 ? std1[0]+' is not a Agri student.' : std1[0]+' is a Agri student';
// console.log(isAgriStuent);



// -------------------------------------Tip Calculator
// var rest01,rest02,rest03;
// var tips = new Array();
// var finalBill = new Array();

// // function
// function calTip(bill){
//     if(bill < 1000){
//         return bill * 0.2;
//     }
//     else if((bill < 1500) && (bill > 1000)){
//         return bill * 0.15;
//     }
//     else{
//         return bill * 0.1;
//     }
// }

// function calFinalBill(bill,tip){
//     return bill + tip;
// }

// rest01Bill = parseFloat(prompt('enetr the restaurant 01 bill : '));
// rest02Bill = parseFloat(prompt('enetr the restaurant 02 bill : '));
// rest03Bill = parseFloat(prompt('enetr the restaurant 03 bill : '));

// rest01 = calTip(rest01Bill);
// rest02 = calTip(rest02Bill);
// rest03 = calTip(rest03Bill);

// tips.push(rest01);
// tips.push(rest02);
// tips.push(rest03);

// rest01 = calFinalBill(rest01Bill,tips[0]);
// rest02 = calFinalBill(rest02Bill,tips[1]);
// rest03 = calFinalBill(rest03Bill,tips[2]);

// finalBill.push(rest01);
// finalBill.push(rest02);
// finalBill.push(rest03);

// console.log(tips);
// console.log(finalBill);


// --------------------------------------Objects
// javascript objects are variables that has many values.
// those values written as name:value pairs wrapped in curly braces.

// ----- Object literals -----
// comma-seperated list of name-value pairs wrapped in curly braces.

// var nimal = {
//     firstName : 'Chinthaka',
//     lastName : 'Senarathna',
//     age : 22,
//     isMarried : false,
//     job : 'no-job',
//     subjects : ['probabilty & statistic','data structure','database','data communication','web designed','principle of management'],
//     address : {
//         street : 03,
//         state : 'meril de silwa rd, elahera',
//         city : 'polonnaruwa',
//         country : 'sri-lanka'
//     },
//     projects : [
//         {
//             name : 'mobile app',
//             technology : 'flutter',
//             version : 1.2
//         },
//         {
//             name : 'web designed - fornt-end',
//             technology : 'HTML ,CSS ,JavaScript ,React',
//             version : 3.1
//         },
//         {
//             name : 'hardware project',
//             technology : 'ardiuno',
//             version : 2.3
//         }
//     ],
//     calBirthYear : function(year){
//         return year - this.age;
//     }
// }

// // display object
// console.log(nimal);
// console.log(nimal.firstName);
// console.log(nimal['lastName']);
// var x = 'age';
// console.log(nimal[x]);

// console.log(nimal.subjects);
// console.log(nimal['subjects']);
// console.log(nimal.subjects[1]);
// console.log(nimal['subjects'][1]);

// console.log(nimal.address);
// console.log(nimal.address.city);
// console.log(nimal['address']['state']);
// console.log(nimal['address'].country);

// console.log(nimal.projects);
// console.log(nimal.projects[0]);
// console.log(nimal.projects[1].name);
// console.log(nimal['projects'][1]['name']);

// console.log('nimal birthyear is : '+nimal.calBirthYear(2023));


// // modify value
// nimal.job = 'Software Engineer';
// nimal.isMarried = true;
// console.log(nimal);


// --- new Object syntax ---
// var chinthaka = new Object();

// console.log(chinthaka);

// // add properties
// chinthaka.firstName = 'chinthaka';
// chinthaka.lastName = 'senarathna';
// chinthaka.age = 22;

// // display object
// console.log(chinthaka);




// --------------------------------BMI chalenge

// declare objects
// var chinthaka = new Object;
// var parami = new Object;

// // add properties to chinthaka
// chinthaka.fullName = prompt("enter chinthaka's full name : ");
// chinthaka.mass = prompt("enter chinthaka's mass : ");
// chinthaka.height = prompt("enter chinthaka's height : ");

// // add properties to parami
// parami.fullName = prompt("enter parami's full name : ");
// parami.mass = prompt("enter parami's mass : ");
// parami.height = prompt("enter parami's height : ");

// // add bmi() method for both
// chinthaka.bmi = parami.bmi = function(){
//     this.bmiVal = this.mass / (this.height ** 2);
//     return this.bmiVal;
// }

// console.log(chinthaka);
// console.log(parami);

// // find the heighest bmi
// if(chinthaka.bmi() > parami.bmi()){
//     alert(chinthaka.fullName+' has the heighest BMI '+chinthaka.bmiVal);
// }
// else if(chinthaka.bmi() < parami.bmi()){
//     alert(parami.fullName+' has the heighest BMI '+parami.bmiVal);
// }
// else{
//     alert('both are equal !');
// }

// console.log(chinthaka);
// console.log(parami);



// ---------------------------------------------------Loops
// -- loops are control structure that repeatedly run a block of code untill a certain get false.

// without loops 1 -> 10 display numbers
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// --- for loops
// for(var i = 0;i < 10;i++){ // i++ same as i = i + 1
//     console.log(i);
// }


// ---  iterate an array
// var students = ['chinthaka','parami','nilanthi','lahiru','sadakalum'];

// for(var i = 0;i < students.length;i++){
//     console.log(students[i]);
// }


// --- for / in loops
// the JavaScript for / in statement loops through the properties of an object
// var person = {
//     firstName : 'chinthaka',
//     lastName : 'senarathna',
//     age : 22,
// }

// for(i in person){
//     console.log(i);
//     console.log(person[i]);
// }


// --- for / of loops
// for / of lets you loop over data structures that are iterable such as Arrays ,Strings ,Maps ,NodeLists and more.
// var fullName = "chinthaka senarathna";

// for(i of fullName){
//     console.log(i);
// }



// --- while loops
// var marks = [10,20,30,40,50];
// var i = 0;

// while(i < 10){
//     console.log(marks[i]);
//     i++;
// }



// ---do-while loops
// var l = 10;

// do{
//     console.log(l);
//     l--;
// }while(l > 0);



// --- continue & break ---
// // the continue & break statements are the only javasript statements that can "jump out of" a code block.
// var data = ['chinthaka',22,'matale',2001,'parami'];

// // ---> continue
// // if a specified conditon occurs, and continues with the next iteration in the loop.
// // for(var i = 0;i < data.length;i++){
// //     if(typeof(data[i]) !== 'string') continue;
// //     console.log(data[i]);
// // }

// // ---> break
// // break the loop and continus executing the code after the loop (if-any)
// // for(var i = 0;i < data.length;i++){
// //     if(typeof(data[i]) !== 'string') break;
// //     console.log(data[i]);
// // }



// -------------------------------Error Handling

// ---> Try - Catch

// try -> let you test a block of code for errors,
// catch -> lets you handle the error,
// throw -> lest you create custom errors,
// finally -> lest you execute code, after try & catch, regardless off the result

// -----function to find the largest number
// function findLargest(a,b,c){
//     try{
//         if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
//             throw "Error : Enter only number";
//         }
//         else if(a == b || b == c || a == c){
//             throw "Error : Enter different values";
//         }
//         else{
//             if(a > b && b > c){
//                 console.log(a+' is a largest number');
//             }
//             else if(b > a && a > c){
//                 console.log(b+' is a largest number');
//             }
//             else if(c > a && c > b){
//                 console.log(c+' is a largest number');
//             }
//             else{
//                 console.log('Invalid input !');
//             }
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log('Your input values are '+a+','+b+','+' & '+c);
//     }
// }

// // calling function
// findLargest(5,2,9);




// --------------------------------JavaScript Scope
//scope determines the accessibility(visibility) of variables. In javascript there are two types of scope.
            //    1.Locale Scope
            //    2.Global Scope

// ----> Local Scope
// variables declared within a JavaScript function, They can only be accessed from within the function. Local variables are deleted when the function is completed.
// function addNumbers(){
//     var a = 3;
//     var b = 4;
//     console.log(a+b);
// }

// // calling the function
// addNumbers();
// console.log(a);
// console.log(b); // we can access, because a & b is a Local variables

// -----> Globale Scope
// A variable declared outside a function, All script and function on a web page can access it. In a web browser, global variables are deleted when you close the browser window(or tab).
// var subject = 'Maths';

// function mySub(){
//     console.log("My favourite subject is "+subject);
//     subject = 'Science';
// }

// // calling function
// mySub();
// mySub();

// console.log(subject);


