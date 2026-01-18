//DOM//
const a=document.getElementById("company")
a.innerText="<h1>capgemini is a mnc company"        //innerhtml:<h1> tag and innerText is dynamically changes apple to capgemini is a mnc company
a.textContent="capgemini pune branch"               //textContent:changes to capgemini pune branch
var b=document.getElementsByClassName("revenue")[0] //getElementsByClassName:changing revenue to budget and make sure to keep[0]
b.innerHTML="<h1>budget</h1>"
const c=document.getElementsByTagName("p") [0]      //p is paragragraph tag,[0] is 1st para tag
c.textContent="we are testers!!"                   //changes to  we are looking for java application devlopers!! to we are testers!!

const z=document.getElementsByTagName("P")
for(let i=0;i<z.clientHeight;i++){
    z[i].textContent="CHANGED PARAGRAPH";
}
const d=document.querySelector("#company")
d.textContent="wipro"                                            //changes from capgemini pune branch to wipro

const e=document.querySelector(".nav-right")
e.textContent="DBS"

const f=document.querySelector("div")
f.textContent="IBM"

const g=document.querySelectorAll(".Sales")
for(let i=0; i<g.length;i++){
    g[i].textContent="LTI"
}//TO EXECUTE TILL HERE MAKE SURE TO CHANGE TO CHANGE IN app.html header in 8th line as <header>

//ATTRIBUTES//
const aa=document.querySelector("header").attributes.id.value      //checking for id
console.log(aa)
const bb=document.querySelector("header").attributes.class.value  //checking for class
console.log(bb)//similarly check for style and href

const cc=document.querySelector("header")                         
cc.setAttribute("style","color:red")                              //adding red colour to text
const dd=document.querySelector("header")
dd.setAttribute("style","background-color:yellow")               //changing the background colour
dd.removeAttribute("style","background-color:yellow")            //removing background colour
