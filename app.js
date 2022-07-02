let newInput = document.querySelector("#task");
const liste = document.querySelector("ul");
const alertBasarili = document.querySelector(".basarili");
const alertBasarisiz = document.querySelector(".basarisiz");
let listArray = [];
let alertToggle = (x) => {
  x.classList.toggle("invis");
};

let elementError = () => {
  alertToggle(alertBasarisiz);
  newInput.value = "";
  setTimeout(() => alertToggle(alertBasarisiz), 1000);
};

let elementAdd = () => {
  let random = Math.random();
  let newObj = { id: random, value: newInput.value };
  listArray.push(newObj);
};

let elementDelete = (id) => {
  listArray = listArray.filter((item) => {
    return item.id !== id;
  });
  writeList();
};
function elementCheck(x) {
  let spn = document.getElementById(`${x}`);
  spn.classList.toggle("checked");
}
let writeList = () => {
  let obj = "";
  listArray.forEach((item) => {
    obj += `<li key="${item.id}" onclick="elementCheck(${item.id})"> <span id="${item.id}"> ${item.value}</span> <button onclick="elementDelete(
       ${item.id}
      )" class="button"> Sil </button> </li>`;
  });
  obj === undefined ? null : (liste.innerHTML = obj);
};

function newElement() {
  if (newInput.value == !"" || newInput.value == !"&nbsp") {
    elementError();
  } else {
    elementAdd();
    alertToggle(alertBasarili);
    setTimeout(() => alertToggle(alertBasarili), 1000);
    writeList();
    newInput.value = "";
  }
}
