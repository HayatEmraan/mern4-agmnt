const paraElement = document.getElementById("para");
const btnElement = document.getElementById("btn");


let count = 0;
btnElement.addEventListener("click", () => {
    count++;
    paraElement.innerText = count;
});
