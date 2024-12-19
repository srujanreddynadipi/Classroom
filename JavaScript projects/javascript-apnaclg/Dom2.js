 let div = document.querySelector("div");
 console.log(div);

 let id = div.getAttribute("id")
 console.log(id);

 let name = div.getAttribute("name")
 console.log(name);

 let parag = document.querySelector("p");
 console.log(parag.setAttribute("class","newclass"));

//  let divs = document.querySelector("div");
//  div.style.backgroundColor = "green";

// div.style.fontSize ="20px"

// let newBtn = document.createElement("button");

// newBtn.innerText = "clickme";

// console.log(newBtn);
// let div = document.querySelector("div");
// div.after(newBtn);
// newBtn.remove();

let newHeading = document.createElement("h1");

newHeading.innerHTML = "<i> hi ,I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
newHeading.remove();