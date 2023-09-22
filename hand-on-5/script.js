const main = () => {
  const toDoInput = document.getElementById("to-do");
  const toDoButton = document.getElementById("add-to-do-list");
  const toDoList = document.getElementById("to-do-list");

  toDoButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (toDoInput.value === "") {
      alert("Please type something");
      return;
    }

    const newList = document.createElement("li");
    const newListP = document.createElement("p");
    const delButton = document.createElement("button");

    newListP.textContent = toDoInput.value;

    delButton.textContent = "Remove";

    newList.append(newListP, delButton);

    toDoList.appendChild(newList);

    newList.setAttribute("class", "item");

    newListP.setAttribute("class", "list-P");

    delButton.setAttribute("class", "del-button");

    delButton.addEventListener("click", (e) => {
      newList.remove();
    });

    newList.addEventListener("click", (e) => {
      newListP.classList.toggle("line-through");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
