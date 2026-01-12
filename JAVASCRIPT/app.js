alert("we are learning external js")
var num=30;
console.log(num);                                   //check output rightclick inspect and console u will see output//

document.write(num);                                //check output on browser//

//primitive datatypes//
document.write("<br>we are learning datatypes<br>");//string datatype declartion//
document.write(12345);                              //number datatype declaration//
Boolean= true, false                                //boolean datatype declaration//
test= 10>20;
document.write(test);

//complex datatypes//
let Apple=["Red","Brown","Green",50,{name:"fruit"}];//array datatype declaration//
console.log(Apple);
const games={                                       //object  datatype declaration//
    cricket : "virat",
    tennis : "sania",
}
console.log(games);

//arithamatic operators//
var a=60;
var b=30;
console.log("Result",a+b);                          //addition
console.log("Result",a-b);                          //subtraction
console.log("Result",a*b);                          //multiplication
console.log("Result",a%b);                          //division
console.log("Result",++a);                          //increment
console.log("Result",--a);                          //decrement

//logical operators
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

//variables
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

//control statements
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


