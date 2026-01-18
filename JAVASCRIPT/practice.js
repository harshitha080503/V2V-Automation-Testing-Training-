function validationForm(){
    const userName=document.getElementById("username").value
    const password=document.getElementById("password").value

    if(userName=="" || password==""){
        alert("please enter username and password");
        return false;
    }   alert("form submitted!! Username is: "+userName +" Password is:" +password);
        return true;
}

function myfunction(){
    const element=document.getElementById("myDiv")
    element.classList.add("myStyle")
}
//BUILT-IN METHODS//
const today=new Date()                          //Date():output will be todays date
document.write(today+"<br>")
document.write(today.getDate()+"<br>")          //getDate():output will be todays date
document.write(today.getMonth()+"<br>")         //getMonth():output will be todays month
document.write(today.getFullYear()+"<br>")      //getFullYear():output will be todays year
document.write(today.getHours()+"<br>")         //getHours():output will be todays hours

document.write(today.setMonth(7)+"<br>") 




//MATH//
const maximum=Math.max(10,50,70,40,220,320)
document.write(maximum +"<br>")
const minimum=Math.min(10,50,70,40,220,320)
document.write(minimum+"<br>")
const random=Math.random(10,50,70,40,220,320,0.68)
document.write(random+"<br>")
const round=Math.round(1.68)
document.write(round+"<br>")
const ceil=Math.ceil(3.01)
document.write(ceil+"<br>")
const floor=Math.floor(80,50,70,40,220,320)
document.write(floor+"<br>")


//OBJECTS
const test=["apple","mango","grapes",34]
console.log(test[2])

const capitals={
    india:"new delhi",
    telangana:"hyderabad",
    maharashtra:"bhopal",

    location:function(){
        return "I work in "+this.maharashtra
    }
}
console.log(capitals.telangana)

//SET AND CLEAR INTERVALS//
/*const Animator=setInterval(sampleAnimation,1000)
let a=0;
function sampleAnimation(){
    a=a+1
    if(a==5){
        clearInterval(Animator)                               //how many times you want to show the content as mentioned a==5 then it will show 5times
    }else{
        const textAnimation=document.getElementById("title")
    }
    const textAnimation=document.getElementById("title")
    textAnimation.style.fontSize=a +"rem"                       //rem is for increment
}*/

//SET AND CLEAR TIMEOUTS//
const Animator=setTimeout(sampleAnimation,1000)
let a=0;
function sampleAnimation(){
    a=a+1
    if(a==5){
        clearTimeout(Animator)                               
    }else{
        const textAnimation=document.getElementById("title")
    }
    const textAnimation=document.getElementById("title")
     textAnimation.style.fontSize=a +"rem"                       //rem is for increment
}