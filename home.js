const egg = document.getElementById("egg");

const cleanBtn = document.getElementById("clean");
const cloth = document.getElementById("cloth-tool");

let cleaningMode = false;

cleanBtn.addEventListener("click", function () {
  cleaningMode = true;
  cloth.style.display = "block";
});

function moveCloth(x, y) {
  cloth.style.left = x - 40 + "px";
  cloth.style.top = y - 40 + "px";

  const eggBox = egg.getBoundingClientRect();

  if (
    x > eggBox.left &&
    x < eggBox.right &&
    y > eggBox.top &&
    y < eggBox.bottom
  ) {
    egg.classList.add("wiggle");
  }
}

document.addEventListener("touchmove", function (event) {
  if (!cleaningMode) return;

  const touch = event.touches[0];
  moveCloth(touch.clientX, touch.clientY);
});

document.addEventListener("mousemove", function (event) {
  if (!cleaningMode) return;

  moveCloth(event.clientX, event.clientY);
});

function stopCleaning() {
  cleaningMode = false;
  cloth.style.display = "none";
  egg.classList.remove("wiggle");
}

document.addEventListener("touchend", stopCleaning);
document.addEventListener("mouseup", stopCleaning);

document.getElementById("feed").addEventListener("click", function () {
  egg.classList.add("bounce");

  setTimeout(function () {
    egg.classList.remove("bounce");
  }, 500);
});

document.getElementById("tickle").addEventListener("click", function () {
  egg.classList.add("wiggle");

  setTimeout(function () {
    egg.classList.remove("wiggle");
  }, 500);
});
