var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "My Wife 👩‍🍼";
    istatus.style.color = "green";
    btn.innerHTML = "Change to my Baby";
    check = 1;
  } else {
    istatus.innerHTML = "My Baby 👼";
    istatus.style.color = "red";
    btn.innerHTML = "Change to my Wife";
    check = 0;
  }
});

var con = document.querySelector("#card");
var love = document.querySelector("i");
con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1.1)";
  love.style.opacity = "1";
  setTimeout(function () {
    love.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});

