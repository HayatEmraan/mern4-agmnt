const paraElement = document.getElementById("para");
const btnElement = document.getElementById("btn");


btnElement.addEventListener("click", () => {
  const confirmation = confirm("Are you sure?");
  if (confirmation) {
    paraElement.innerText = "You clicked the button, hurray!";
  }
});
