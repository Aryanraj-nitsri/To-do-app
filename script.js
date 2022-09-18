// got all required html elements
const input = document.querySelector("#container>form>input");
const form = document.querySelector("#container>form");
const Lists = document.getElementById("lists");
const Listsliders = document.querySelectorAll("#lists li img");
const checkBoxes = document.querySelectorAll("#lists input ");
const button = document.getElementById("button");
const allTask = document.querySelector("#taskStates>span");
let allLists=document.querySelectorAll("#lists li")

// adding Event listeners

form.addEventListener("submit", handleSubmit);
for (let list of Listsliders) {
  list.addEventListener("click", handleClick);
}
for (let checkbox of checkBoxes) {
  checkbox.addEventListener("click", handleCheck);
}
input.addEventListener("focus",handleFocus)
input.addEventListener("focusout",handleFocus)
// function to execute after submit 
function handleSubmit(e) {
  e.preventDefault();
  let value = input.value;
  const newList = document.createElement("li");
  newList.classList.add("newlist");
  newList.innerHTML = `<div><input type="checkbox"></input><span>${value}</span></div> <img src="https://cdn-icons-png.flaticon.com/512/458/458594.png" alt="">`;
  Lists.prepend(newList);
  input.value = "";
  const delteButton = document.querySelector(".newlist img");
  const newTask = document.querySelector(".newlist>div>input");
   allLists = document.querySelectorAll("#lists li");
  allTask.innerText=`All Task left: ${allLists.length} `
  
  
  delteButton.addEventListener("click", handleClick);
  newTask.addEventListener("click", handleCheck);
  
}

function handleClick(e) {
  Lists.removeChild(e.target.parentElement);
}
function handleCheck(e) {
  e.target.parentElement.parentElement.classList.toggle("completed");
  e.target.setAttribute("checked","true")
}
function handleFocus(){
console.log(button.style.display)
if(button.style.display==="none" || !button.style.display ){

    button.style.display="block"
}
else{
    button.style.display="none"

}


}

// footer functionality 
const taskType = document.querySelectorAll("#taskClassification span");
for (let element of taskType) {
  element.addEventListener("click",handleTask)
}
const slider = document.getElementById("slider")
let completedTasks = document.querySelectorAll(".completed");
let Uncompleted = document.querySelectorAll("#lists li:not(.completed)");
function handleTask(e) {

  if (e.target.innerText === "All") {
    slider.style.left = "0";
    slider.style.width = "1.3rem";

    // for (let uncomplete of Uncompleted) {
    //   uncomplete.style.display = "block"
    // }
    // for (let completedTask of completedTasks) {
    //   completedTask.style.visibility="visible"
    // }
    for (let list of allLists) {
      list.style.display="flex"
    }
    allTask.innerText = `All Task left: ${allLists.length} `;
    input.disabled = false;

  }
  else if (e.target.innerText === "Uncompleted") {
    slider.style.left = "14%";
    slider.style.width = "7rem";
    for (let list of allLists) {
      list.style.display="none"
    }
    const completedTasks = document.querySelectorAll(".completed")
    for (let list of allLists) {
      // if(list.classList)
      console.log(list.getAttribute("class"))
      console.log(list.getAttribute("class"))
      if (list.getAttribute("class") === null || list.getAttribute("class")==="newlist") {
        list.style.display="flex"
      }
    }
  allTask.innerText=`Uncompleted : ${allLists.length-completedTasks.length} `
    input.disabled = true;
  }
  else if (e.target.innerHTML === "Completed") {
    slider.style.left = "64%";
    slider.style.width = "6rem";
    for (let list of allLists) {
      list.style.display="none"
    }
    const Uncompleted = document.querySelectorAll(".completed");
    
    for (let list of allLists) {
      // if(list.classList)
      console.log(list.getAttribute("class"))
      if (list.getAttribute("class") === "completed" || list.getAttribute("class")==="newlist completed") {
        list.style.display="flex"
      }
    }
  allTask.innerText=`completed : ${Uncompleted.length} `
    input.disabled = true;
  
  }
}
// task completing and clearing
const checkAll = document.getElementById("checkAllTask");
checkAll.addEventListener("click", handleCheckAll);
function handleCheckAll() {
const checkBoxes = document.querySelectorAll("#lists input ");

  for (let checks of checkBoxes) {
    checks.checked = true;
  }
  for (let list of allLists) {
    list.classList.add("completed")
  }
}
const clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", handleClear);
function handleClear() {
  const checkedLists = document.querySelectorAll(".completed");
  console.log(checkedLists)
  for (let checkedList of checkedLists) {
    Lists.removeChild(checkedList)
  }
}