import "./styles.css";

const addOnClick = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "達成";
  completeBtn.addEventListener("click", () => {
    deleteFromIncompleteList(completeBtn.parentNode);
    const completeLi = document.createElement("li");
    completeLi.innerText = li.innerText;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "戻す";
    removeBtn.addEventListener("click", () => {
      document
        .getElementById("complete-list")
        .removeChild(removeBtn.parentNode);
      createTask(completeLi, btns, "incomplete-list");
    });

    const newBtns = [removeBtn];

    createTask(completeLi, newBtns, "complete-list");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  const btns = [completeBtn, deleteBtn];
  createTask(li, btns, "incomplete-list");
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createTask = (li, btns, place) => {
  const newDiv = document.createElement("div");
  newDiv.className = "li-row";
  newDiv.appendChild(li);
  btns.map((btn) => newDiv.appendChild(btn));
  console.log(newDiv);
  document.getElementById(place).appendChild(newDiv);
};

document.getElementById("add-btn").addEventListener("click", () => {
  addOnClick();
});
