const bounce = document.getElementById("bounce");
const fakeForm = document.getElementById("wrapper");
const email = document.getElementById("email");

bounce.addEventListener('keyup', appendChar);
bounce.addEventListener('submit', submitForm);

function appendChar(){
  let formVal = email.value;
  let result = "";
  let inputData = document.createElement("p");
  inputData.setAttribute("id", "fieldtext");
  inputData.innerHTML = formVal;
  fakeForm.innerHTML = '<span class="cursor"></span>';
  let splitText = inputData.textContent.split("");
  splitText.forEach(function(char){
    result += (char.trim() === "") ? "" : "<span><span data-char='"+char+"'>" + char +"</span></span>"
  });
  fakeForm.innerHTML += result;
}

function submitForm(e){
  e.preventDefault();
  document.body.classList.add("sliding");
  setTimeout(() => {
   fakeForm.innerHTML = '<span class="cursor"></span>';
   document.getElementById("bounce").reset(); document.body.classList.remove("sliding");
  }, 6500);
}