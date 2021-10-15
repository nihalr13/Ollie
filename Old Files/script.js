let uid = new ShortUniqueId();
let filters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");
let addBtn = document.querySelector(".add");
let delBtn = document.querySelector(".action2");
let colors = {
  pink: "#d595aa",
  blue: "#5ecdde",
  green: "#91e6c7",
  black: "black"
};

let ColorArr = [
  "pink-color-btn",
  "blue-color-btn",
  "green-color-btn",
  "black-color-btn"
];

let isPrioritySelected = false;
let SelectedColorClass;
let deleteState = false;
let body = document.querySelector("body");
let modalDisp = false;
let modal;

function ModalFilterSelecter(e) {
  if (e.currentTarget.classList.contains("active-modal-filer")) {
    e.currentTarget.classList.remove("active-modal-filer");
    isPrioritySelected = false;
    SelectedColorClass = "";
  } else {
    let filters = document.querySelectorAll(".modal-filter");
    for (let j = 0; j < filters.length; j++) {
      if (filters[j].classList.contains("active-modal-filer"))
        filters[j].classList.remove("active-modal-filer");
    }
    e.currentTarget.classList.add("active-modal-filer");
    isPrioritySelected = true;
    SelectedColorClass = e.currentTarget.classList[1];
  }
}

function WritingAreaTicketHandler(e) {
  let id = e.currentTarget.parentElement
    .querySelector(".ticket-id")
    .innerText.split("#")[1];
  let tasksArr = JSON.parse(localStorage.getItem("tasks"));
  let index = -1;
  for (let i = 0; i < tasksArr.length; i++) {
    if (tasksArr[i].id == id) {
      index = i;
      break;
    }
  }
  tasksArr[index].task = e.currentTarget.innerText;
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

function TicketCreator(e) {
  if (e.key == "Enter" && isPrioritySelected) {
    let task = e.currentTarget.innerText;
    let ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.addEventListener("click", DeleteFunc);
    let id = uid();
    ticket.innerHTML = `  <div class="ticket-color ${SelectedColorClass}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="lock fas fa-lock-open"></div>
        <div class="ticket-box" contenteditable >${task}</div>`;

    let container = document.querySelector(".container");
    if (container.classList.contains("dark")) {
      ticket.style.backgroundColor = "#333333";
      let id = ticket.querySelector(".ticket-id");
      id.style.color = "#f9c859";
      let text = ticket.querySelector(".ticket-box");
      text.style.color = "#ff6480";
    }

    let ticketWritingArea = ticket.querySelector(".ticket-box");
    ticketWritingArea.addEventListener("input", WritingAreaTicketHandler);

    let lock = ticket.querySelector(".lock");
    lock.addEventListener("click", function(e) {
      let textArea = e.currentTarget.parentElement.querySelector(".ticket-box");

      if (e.currentTarget.classList.contains("fa-lock-open")) {
        e.currentTarget.classList.remove("fa-lock-open");
        e.currentTarget.classList.add("fa-lock");
        textArea.setAttribute("contenteditable", false);
      } else {
        e.currentTarget.classList.remove("fa-lock");
        e.currentTarget.classList.add("fa-lock-open");
        textArea.setAttribute("contenteditable", true);
      }
      let lockState = e.currentTarget.classList[2];

      let id = e.currentTarget.parentElement
        .querySelector(".ticket-id")
        .innerText.split("#")[1];
      let tasksArr = JSON.parse(localStorage.getItem("tasks"));
      let index = -1;
      for (let i = 0; i < tasksArr.length; i++) {
        if (id == tasksArr[i].id) {
          index = i;
          break;
        }
      }
      tasksArr[index].lockState = lockState;
      localStorage.setItem("tasks", JSON.stringify(tasksArr));
    });
    let lockState = lock.classList[2];
    
    /*
    
    Add firebase logic to save ticket in the database in JSON format
    
    */
    
    grid.appendChild(ticket);
    modalDisp = false;
    modal.remove();
    isPrioritySelected = false;
    SelectedColorClass = "";

    let ticketColorDiv = ticket.querySelector(".ticket-color");

    ticketColorDiv.addEventListener("click", function(e) {
      if (
        e.currentTarget.parentElement
          .querySelector(".lock")
          .classList.contains("fa-lock-open")
      ) {
        let CurrColor = ticketColorDiv.classList[1];
        let idx = ColorArr.indexOf(CurrColor);
        idx = (idx + 1) % 4;
        ticketColorDiv.classList.remove(CurrColor);
        ticketColorDiv.classList.add(ColorArr[idx]);
        let id = e.currentTarget.parentElement
          .querySelector(".ticket-id")
          .innerText.split("#")[1];
        let tasksArr = JSON.parse(localStorage.getItem("tasks"));
        let index = -1;
        for (let i = 0; i < tasksArr.length; i++) {
          if (tasksArr[i].id == id) {
            index = i;
            break;
          }
        }
        tasksArr[index].SelectedColorClass = e.currentTarget.classList[1];
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
      } else {
        alert("this ticket is locked");
      }
    });
  }
}
