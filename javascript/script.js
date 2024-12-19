let text = document.querySelector(".text");
let spans = text.innerText.split("").map((letter, i) => {
   return `<span style="transition-delay:${i * 40}ms">${letter}</span>`
}).join("");
text.innerHTML = spans;

