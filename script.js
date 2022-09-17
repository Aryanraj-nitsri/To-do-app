// got all required html elements
const input = document.querySelector("#container>form>input");
const form = document.querySelector("#container>form");
const Lists = document.getElementById("lists");
const ListItems = document.querySelectorAll("#lists li img");
const checkBoxes = document.querySelectorAll("#lists input ");

// adding Event listeners

form.addEventListener("submit", handleSubmit);
for (let list of ListItems) {
  list.addEventListener("click", handleClick);
}
for (let checkbox of checkBoxes) {
  checkbox.addEventListener("click", handleCheck);
}
// function to execute after submit 
function handleSubmit(e) {
  e.preventDefault();
  let value = input.value;
  const newList = document.createElement("li");
  newList.classList.add("newlist");
  newList.innerHTML = `<input type="checkbox"></input><span>${value}</span> <img src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" alt="">`;
  Lists.prepend(newList);
  input.value = "";
  const delteButton = document.querySelector(".newlist img");
  const newTask = document.querySelector(".newlist>input");
  delteButton.addEventListener("click", handleClick);
  newTask.addEventListener("click", handleCheck);
}

function handleClick(e) {
  Lists.removeChild(e.target.parentElement);
}

function handleCheck(e) {
  e.target.parentElement.classList.toggle("completed");
}
