// Put DOM elements into variables
const contact = document.querySelector("#contact");
const firstNameInput = document.querySelector("#firstname");
const lasttNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const msg = document.querySelector(".formMessage");
const btn = document.querySelector("#submit");
const userList = document.querySelector("#users");

// Listen for form submit
contact.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (firstNameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${firstNameInput.value} ${lasttNameInput.value} ${emailInput.value} ${messageInput.value}`
      )
    );
    userList.appendChild(li);

    firstNameInput.value = "";
    lasttNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Sample projects
var projects = [
  "project1",
  "project1",
  "project1",
  "project1",
  "project1",
  "project1",
  "project1",
  "project1",
  "project1",
];

var projectGallery = document.getElementById("projectgallery");
// Function to add skills with animation
function addProjectGallery() {
  for (var i = 0; i < projects.length; i++) {
    (function (i) {
      setTimeout(function () {
        var project = projects[i];
        var listItem = document.createElement("li");
        listItem.textContent = project;
        listItem.style.opacity = "0";
        projectGallery.appendChild(listItem);
        setTimeout(function () {
          listItem.style.opacity = "1";
        }, 300 * i);
      }, 300 * i);
    })(i);
  }
}

// Add skills with animation when the page loads
addProjectGallery();

function add() {}