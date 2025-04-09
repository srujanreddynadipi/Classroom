const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//this is used to add task
function addTask(){
    if(inputBox.value === ''){//check the input value is empty or not 
        alert("You must write something !")
    }
    else{ // if the input value is not empty 
        let li = document.createElement("li");//create an element
        li.innerHTML = inputBox.value;// add the value in this created li
        listContainer.appendChild(li);// move the li into list container
        let span = document.createElement("span"); //create the span element
        span.innerHTML = "\u00d7"; // this code create the cross icon
        li.appendChild(span); // move the cross icon into the span
    }
    inputBox.value = ""; // after addding the task empty the the input box
    saveData();  // them save data
}

// click funtiohn to responed the action
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){  
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// this save the data incase of refesh close 
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}
//this show the save data after reopening the page
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();