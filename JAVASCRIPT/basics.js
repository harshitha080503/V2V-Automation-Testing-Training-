alert("we are learning external js")
var num=30;
console.log(num);                                   //check output rightclick inspect and console u will see output//

document.write(num);                                //check output on browser//

//PRIMITIVE DATATYPES//
document.write("<br>we are learning datatypes<br>");//string datatype declartion//
document.write(12345);                              //number datatype declaration//
Boolean= true, false                                //boolean datatype declaration//
test= 10>20;
document.write(test);

//COMPLEX DATATYPES//
let Apple=["Red","Brown","Green",50,{name:"fruit"}];//array datatype declaration//
console.log(Apple);
var games={                                       //object  datatype declaration//
    cricket : "virat",
    tennis : "sania",
}
console.log(games);

//ARITHEMATIC OPERATORS//
var a=60;
var b=30;
console.log("Result",a+b);                          //addition
console.log("Result",a-b);                          //subtraction
console.log("Result",a*b);                          //multiplication
console.log("Result",a/b);                          //division
console.log("Result",a%b);                          //to check remainder
console.log("Result",++a);                          //increment
console.log("Result",--a);                          //decrement

//LOGICAL OPERATORS//
var x=100;
var y=50;
var z=200;
if(x==y && y<z){                                     //AND operator:x==y(false),y<z(false) so both are false output is false
    console.log("yes correct answer");
}else{
    console.log("no wrong answer");
}

var x=100;
var y=200;
var z=300;
if(x==y && y<z){                                     //AND operator:x==y(false),y<z(true) so both are false output is false
    console.log("yes correct answer");
}else{
    console.log("no wrong answer");
}//similarly try for others also

var x=100;
var y=200;
var z=300;
if(x==y || y<z){                                     //OR operator:x==y(false),y<z(true) so both are false output is true
    console.log("yes correct answer");
}else{
    console.log("no wrong answer");
}

var x=100;
var y=200;
var z=300;
if(!(x=y && y<z)){                                    //NOT operator:x==y(false),y<z(true) so the output will be false
    console.log("yes correct answer");
}else{
    console.log("no wrong answer");
}

document.write(2+3==5? "<br>yes correct":"no its wrong")//ternary operator

//VARIABLES//
var apple="sour";                                       //using var check output rightclick inspect and console u will see output//
console.log(apple);
var apple="red";
console.log(apple);

let vegetable="carrot";                                 //using let check output rightclick inspect and console u will see output//
console.log(vegetable);
vegetable="orange";
console.log(vegetable);

const mango="sweet";                                    //using const check output rightclick inspect and console u will see output//
console.log(mango);

//CONTROL STATEMENTS//
var game="cricket";
let captain="dhoni";
if(game="cricket"){                                     //If,If-Else condition
    console.log("match captain is ",captain)
}else{
    console.log("Its a wrong answer")
}

var game="batmenton";
let player="pv sindu";
const tennis="sania"
if(game=="basketball"){                                  //If Else-if condition
    console.log("match player is ",player);
}else if(tennis=="sania"){
    console.log("Its a correct answer");
}else{
    console.log("nothing is matching");
}

switch(true){                                           //switch statement
    case 10>20:
        answer = "red colour";
        break;
    
    case 100==200:
        answer = "black colour"
        break;

    case 20>10:
        answer = "green colour"
        break;

    default:                                           //if nothing matches output will be Nothing above
        answer = "Nothing above"
        break;
}
console.log(answer);

//FUNCTIONS//
function banana(){
    document.write("<br>hello we are testers!!");
    console.log(banana)
}
banana();
banana();
banana();
banana();

//SCOPE//
var apple = "red";
var orange = "green";
var banana = "yellow";
function fruit(){
    document.write("<br>" +apple);                              //Function scope:writing inside the function
    document.write("<br>" +orange);
    document.write("<br>" +banana);
}
    document.write(apple);                                      //Global scope:writing outside the function or body 
    document.write(orange);
    document.write(banana);
fruit();

{// Var can Accessible inside & outside the block scope 
var x = 10;                                                      //block scope
// let , const Accessible only inside the block scope
const y = 20;
let z = 30;
console.log(x);
console.log(y);
console.log(z);
}
console.log(x);

//METHODS//
//1.array methods
let sports=["cricket","football",222]                      
sports.push("tennis","batminton")                                  //push():add one or more elememt to the end of an array
sports.pop()                                                       //pop():removes the last element
sports.shift()                                                     //shift():removes the first element
sports.unshift("swimming")                                         //unshift():adding to the first element
console.log(sports)
console.log(sports.length)                                         //to check the length
let score=[350,20, ,44]
let total = score.concat(sports)                                   //concat():combines two or more arrays and provide new array
console.log(total)
var marks=[40,55,60,"math","social","english"]                     //join():createing a new string by concatinating all the elements of an array and returns a string by a specified separator
var student=marks.join("+")
console.log(student)
let mynumbers=[0,1,2,3,4,5,6,7,8,9]                                
let mynewnumbers=mynumbers.slice(0,5,"hello world")               //slice:returns a shallow copy of a portion of an array 
console.log(mynewnumbers)
                                                                   //splice():change the contents of an array by removing and replacing | let mynewnumbers=mynumbers.splice(0,5,"hello world")  

let family=["srinu","mani","sruthi","dolly"]                       //indexof():
var newfamily=family.indexOf("lohith");                            //you will get -1 as lohith is not family member
console.log(newfamily)                                             
family.forEach(function(item,index){
    console.log(index + 0 + ","+item+"")
})

//2.string methods
var sample ="we are the testing team ";                         
console.log(sample.split(""))                                      //split():each letter gets splitted
document.write("<br>" +sample.split(""))
var removingspace="                  testing"
document.write(removingspace.trim())                               //trim():removing white space
console.log(removingspace.toLowerCase())                           //toLowerCase():small letter(only 1st letter)
console.log(removingspace.toUpperCase())                           //toUpperCase():capital letter(only 1st letter)
console.log(sample.charAt(3))                                      //charAt():to know the which letter/charcter is present 

//LOOPS//
//1.for loop
for(var a=5;a<=10;a++){                                            //for increment
    document.write(a+""+"we are testers"+"<br>")
}
for(var a=10;a>=1;a--){                                            //for decrement
    document.write(a+""+"we are testers"+"<br>")
}

//2.while loop
//let s=1;
//while(s<=10){
//  document.write(+""+"we are batch 2"+"<br>")
//}

//3.let t=0;
//do{
// console.log("we are the testers");
//   t++
//}while(t<20)

