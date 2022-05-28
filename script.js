
(function renderElem() {
  const container = document.querySelector(".container");
  const pElem = document.createElement("p");
  pElem.textContent = "welcome";
  pElem.setAttribute("class", "para");
  container.appendChild(pElem);

  const newTextDiv = document.createElement("div");
  newTextDiv.setAttribute("class", "newText");
  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", "text");
  inputElem.setAttribute("placeholder", "type your text");
  newTextDiv.appendChild(inputElem);
  container.appendChild(newTextDiv);

  const fontStyleDiv = document.createElement("div");
  fontStyleDiv.setAttribute("class", "fontStyle");
  const fontSizeInput = document.createElement("input");
  fontSizeInput.setAttribute("type", "number");
  fontSizeInput.setAttribute("class", "fontSize");
  inputElem.setAttribute("placeholder", "Enter the font size");
  fontStyleDiv.appendChild(fontSizeInput);

  const colorInput = document.createElement("input");
  colorInput.setAttribute("type", "color");
  colorInput.setAttribute("class", "fontColor");
  fontStyleDiv.appendChild(colorInput);
  newTextDiv.appendChild(fontStyleDiv);

  const btn = document.createElement("button");
  btn.setAttribute("class", "updateBtn");
  btn.textContent = "update";
  container.appendChild(btn);
})();

const updateBtn = document.querySelector(".updateBtn");
updateBtn.addEventListener("click", () => {
  const [newPara, newText, fontSize, fontColor] = [
    document.querySelector(".para"),
    document.querySelector(".newText input"),
    document.querySelector(".fontSize"),
    document.querySelector(".fontColor"),
  ];

  newPara.textContent = newText.value;
  newPara.style.fontSize = `${fontSize.value}px`;
  newPara.style.color = `${fontColor.value}`;
});
