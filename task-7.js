
let rangeRef = document.querySelector("#font-size-control");
let textRef = document.querySelector("#text");
textRef.style.fontSize = "40px";
rangeRef.addEventListener(
  "input",
  () => (textRef.style.fontSize = rangeRef.value + "px")
);