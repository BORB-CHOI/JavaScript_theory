const title = document.querySelector("h1");

function handleClick() {
  title.style.color = "red";
  console.log(event);
}

title.addEventListener("resize", handleClick);
