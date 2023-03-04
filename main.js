window.addEventListener("load", () => {
  const btn1 = document.querySelector(".btn-1");
  const btn2 = document.querySelector(".btn-2");
  const btn3 = document.querySelector(".btn-3");
  const btn4 = document.querySelector(".btn-4");
  const img = document.querySelector(".img");

  btn1.addEventListener("click", () => {
    img.setAttribute("src", "./img/dark1.png");
  });
  btn2.addEventListener("click", () => {
    img.setAttribute("src", "./img/Travel_Guide.png");
  });
  btn3.addEventListener("click", () => {
    img.setAttribute("src", "./img/dark.png");
  });

  btn4.addEventListener("click", () => {
    img.setAttribute("src", "./img/home page/black.png");
  });
});
