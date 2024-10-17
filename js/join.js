const userPhoneNumContainer = document.querySelector(".userPhoneNumContainer");
const listOpenBtn = userPhoneNumContainer.querySelector(".listOpen");
const phoneNumList = userPhoneNumContainer.querySelector(".phoneNumList");
const img = userPhoneNumContainer.querySelector("img");

const userHelp = document.querySelector(".userHelp");
const agreeTermCheck = userHelp.querySelector(".agreeTermCheck");

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

agreeTermCheck.addEventListener("click", () => {
  agreeTermCheck.classList.toggle("on");

  if (agreeTermCheck.classList.contains("on")) {
    img.setAttribute("src", "./assets/check-fill-box.svg");
  } else {
    img.setAttribute("src", "./assets/check-box.svg");
  }
});

// 비밀번호 서로 일치하는지 확인

// 전부 입력되고+체크박스 체크해야 가입하기 버튼 활성화...?
