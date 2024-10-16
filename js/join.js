const userPhoneNumContainer = document.querySelector(".userPhoneNumContainer");
const listOpenBtn = userPhoneNumContainer.querySelector(".listOpen");
const phoneNumList = userPhoneNumContainer.querySelector(".phoneNumList");
const img = userPhoneNumContainer.querySelector("img");

function selectPhoneNum(e) {
  if (e.target.nodeName === "BUTTON") {
    listOpenBtn.textContent = e.target.textContent;
    listOpenBtn.classList.remove("on");
    img.setAttribute("src", "./assets/icon-down-arrow.svg");
  }
}

listOpenBtn.addEventListener("click", () => {
  listOpenBtn.classList.toggle("on");

  if (listOpenBtn.classList.contains("on")) {
    img.setAttribute("src", "./assets/icon-up-arrow.svg");
  } else {
    img.setAttribute("src", "./assets/icon-down-arrow.svg");
  }
});

phoneNumList.addEventListener("click", selectPhoneNum);
