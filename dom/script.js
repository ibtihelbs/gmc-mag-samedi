// html selector
const p = document.querySelector("p");
console.log(p);
p.innerHTML = "salut tout le monde";
const li = document.querySelectorAll("li");
console.log(li);
const button = document.querySelector("button");
const container = document.querySelector("#container");
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "lightblue";
}

function randomColor() {
  const random = Math.floor(Math.random() * 10000);
  p.innerHTML = "#" + random;
  return "#" + random;
}
randomColor();
const input = document.querySelector("input");

input.addEventListener("change", function () {
  container.style.backgroundColor = input.value;
});

button.addEventListener("click", function () {
  container.style.backgroundColor = randomColor();
});
