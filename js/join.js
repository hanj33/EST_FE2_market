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
  }
}

listOpenBtn.addEventListener("click", () => {
  listOpenBtn.classList.toggle("on");
});

phoneNumList.addEventListener("click", selectPhoneNum);

agreeTermCheck.addEventListener("click", () => {
  agreeTermCheck.classList.toggle("on");
});

// 전부 입력되고+체크박스 체크해야 가입하기 버튼 활성화...?

const loginInput = document.querySelector(".loginInput");

const userID = loginInput.querySelector("#userID");
const userPW = loginInput.querySelector("#userPW");
const userPWre = loginInput.querySelector("#userPWre");
const passwordError = loginInput.querySelector(".passwordError");
const userName = loginInput.querySelector("#userName");
const userPhoneNumInput =
  userPhoneNumContainer.querySelectorAll(".userPhoneNumInput");

userPWre.addEventListener("input", () => {
  if (userPW.value === userPWre.value) {
    if (userPW.checkValidity()) {
    }
    userPWre.classList.add("on");
  } else {
    userPWre.classList.remove("on");
  }

  userPW.setCustomValidity("");
  userPWre.setCustomValidity("");

  if (userPW.value !== userPWre.value) {
    userPWre.setCustomValidity("비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    userPWre.setCustomValidity("");
  }

  if (!userPWre.checkValidity()) {
    passwordError.textContent = userPWre.validationMessage;
  } else {
    passwordError.textContent = "";
  }
});

// 전화번호는 어떻게 넣어야 되지,,, 쿼리ALL로 넣었으니까 인덱스 돌면서 맞는지 아닌지 봐야 할 듯...?
// function checkPhoneNum() {
//   for (let i = 0; i > userPhoneNumInput.length; i++) {
//     if (!userPhoneNumInput[i].checkValidity()) {
//       return false;
//     }
//   }
// }

// userPhoneNumInput.forEach((e) => {
//   e.addEventListener("input", checkPhoneNum());
// });

loginInput.addEventListener("submit", (e) => {
  e.preventDefault();

  userPW.setCustomValidity("");
  userPWre.setCustomValidity("");

  if (userPW.value !== userPWre.value) {
    userPWre.setCustomValidity("비밀번호가 일치하지 않습니다.");
  }

  if (!userPWre.checkValidity()) {
    passwordError.textContent = userPWre.validationMessage;
  }

  if (
    userID.checkValidity() &&
    userPW.checkValidity() &&
    userPWre.validity.valid === true &&
    userName.checkValidity() &&
    agreeTermCheck.classList.contains("on")
  ) {
    e.target.submit();
  }
});
