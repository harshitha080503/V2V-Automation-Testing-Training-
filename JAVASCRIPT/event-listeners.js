//syntax to remember
/*document.getElementById("closebtn").addEventListener('click',hideinfo)

function hideinfo(){                                             //hiding info
    sideNavBar.style.display="block";
    mainSection.forEach(function(item){
        item.style.display="block"
    })
    loginModel.style.display="none"
}
document.getElementById("closebtn").addEventListener('click',)
function openinfo(){                                            //opening it again means dont want to hide
    sideNavBar.style.display="none";
    mainSection.forEach(function(item){
        item.style.display="none"
    })
    loginModel.style.display="block"}

const mainForm =document.getElementById("myForm")
const userName =document.getElementById("nameInput")
const inputName =document.getElementById("name")
 
mainForm.addEventListener('submit',function(e){
e.preventDefault()
 
const myUserName= userName.value
inputName.textContent = myUserName
mainForm.reset()
})
const userInput=document.getElementById("nameInput")
userInput.addEventListener("focus",function(event){
    event.target.style.background="pink"                        //to add colour to enter your name box
    
})*/

const myNewColors = document.getElementById("mycolors");
const myNewBox = document.getElementById("box");
 
myNewColors.addEventListener("change",function(){
    myNewBox.style.background = myNewColors.value   // we aligned both javascrpt, option change color and css via javascript.
   
})

function handleChange(){
const myCountry=document.getElementById("country").value
document.getElementById("txt").textContent="Selected Country:"+myCountry;
}
