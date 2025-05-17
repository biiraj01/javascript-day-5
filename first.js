let newBtn= document.createElement("bod");

newBtn.innerText = "Click me";

newBtn.style.backgroundColor="red";
newBtn.style.color="white";

let bod= document.querySelector("body");
bod.prepend(newBtn);
