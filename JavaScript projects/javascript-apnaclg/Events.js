let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;

//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

btn1.addEventListener("click",(evt)=>{
    console.log(" button1 was clicked - handler1")
});

btn1.addEventListener("click",()=>{
    console.log(" button1 was clicked - handler2")
});

btn1.addEventListener("click",()=>{
    console.log(" button1 was clicked - handler3")
});

// <------------------to remove ----------------------------->
const handler4 =()=>{
    console.log(" button1 was clicked - handler4")
};
btn1.addEventListener("click me", handler4);


btn1.removeEventListener("click",handler4);

// <---------------------------practise question -------------------->
//create a toogle  button that channges the screen 
// to dark-mode when clicked & light -mode when clicked again .

let modebtn = document.querySelector("#mode");//accessing the button unsing id 
let currMode = "light"; // dark setting the current mode to light 
let body = document.querySelector("body"); // accessing the body using bidy tag
modebtn.addEventListener("click",()=>{  //applying evnt listeners to the modebtton
    if (currMode === "light"){  // condition 
        currMode = "dark";
        body.classList.add("dark"); // this change the light mode to dark mode 
        body.classList.remove("light");// remove the light mode 
    } else {
        currMode =  "light";
        body.classList.add("light"); // this change the dark mode to light mode 
        body.classList.remove("dark");// remove the dark mode 
    }
    console.log(currMode);
});