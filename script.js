let count = 0;
document.getElementById("btn-add").addEventListener("click", function () {
  const myInputValue = document.getElementById("input-value").value;

  if (myInputValue === "") {
    alert("Please add your task");
  } else {
    count += 1;
    const parent = document.getElementById("content-container");

    const tr = document.createElement("tr");
    tr.classList.add("padding-center");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class='btn-delete padding-center mx-auto mt-5 flex justify-center px-4 py-2 bg-red-500 text-xl font-medium rounded-md text-white'>Delete</button>
    </td>
    <td>
    <button class='btn-done padding-center mx-auto mt-5 flex justify-center px-4 py-2 bg-green-500 text-xl font-medium rounded-md text-white'>Done</button>
    </td>
  
  `;
    parent.appendChild(tr);
    document.getElementById("input-value").value = "";

    const deleteElements = document.querySelectorAll(".btn-delete");
    for (const value of deleteElements) {
      value.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.display = "none";
      });
    }

    const doneElements = document.querySelectorAll(".btn-done");
    for (const value of doneElements) {
      value.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }
  }
});

document.getElementById("btn-clear").addEventListener("click", function (e) {
  e.target.parentNode.style.display = "none";
});
