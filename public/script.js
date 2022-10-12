const fullname = document.querySelector("#fullname");
const input = localStorage.getItem("fullname");
if (input) {
  fullname.setAttribute("value", `${input}`);
} else {
  fullname.textContent = "";
}

const clicker = () => {
  const fullname = document.querySelector("#fullname");

  const name = localStorage.setItem("fullname", fullname.value);
};
