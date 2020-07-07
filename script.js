let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let deleteBtns = document.getElementsByClassName("delete");
let items = ul.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

//add event listener to first 6 btns in HTML file

for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

ul.onclick = function (event) {
  var target = getEventTarget(event);
  target.classList.toggle("done");
};

//add items to list

function createListElement() {
  let btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = removeParent;

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);

  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
