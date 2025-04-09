
// create a h2 heading element with text "hello javascript" 
//  append "from Apna College students" to these texts using javascript


// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " srujan";



// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = 'new unique value ${idx}';
//     idx++;
// }


// <---------------DOM 2  practice set -------------------------->
// create a new buttom element . give it a text "click me ", background color of red ans text color of white 
// insert the button as the first element  inside the body tag

// let butt = document.createElement("button");

// let body = document.querySelector("body");

// butt.innerText = "clickme"

// body.prepend(butt);

// butt.style.backgroundColor = "red";
// butt.style.color = "white";


// create a <p> tag in html , give it a class & some styling .
//  now create a new class in CSS  and try to append this class to the <p> 

let para = document.querySelector("p");
// para.setAttribute("class","newclass");
para.classList.add("newclass");