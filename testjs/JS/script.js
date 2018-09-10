const btn = document.querySelector("button");

const changeText = function () {

    btn.textContent = "new button";
}

btn.addEventListener("click", changeText);

console.log("hello")