const userPhoneNumContainer = document.querySelector(".userPhoneNumContainer");
const listOpenBtn = userPhoneNumContainer.querySelector(".listOpen");
const phoneNumList = userPhoneNumContainer.querySelector(".phoneNumList");
const img = userPhoneNumContainer.querySelector("img");

const userHelp = document.querySelector(".userHelp");
const agreeTermCheck = userHelp.querySelector(".agreeTermCheck");

// 전화번호 앞자리 리스트
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

// agreeTermCheck.addEventListener("click", () => {
//   agreeTermCheck.classList.toggle("on");
// });

// 전부 입력되고+체크박스 체크해야 가입하기 버튼 활성화...?

const loginInput = document.querySelector(".loginInput");

const userID = loginInput.querySelector("#userID");
const IDError = loginInput.querySelector(".IDError");

const userPW = loginInput.querySelector("#userPW");
const passwordError = loginInput.querySelector(".passwordError");

const userPWre = loginInput.querySelector("#userPWre");
const passwordReError = loginInput.querySelector(".passwordReError");
const userName = loginInput.querySelector("#userName");
const userPhoneNumInput =
  userPhoneNumContainer.querySelectorAll(".userPhoneNumInput");

// 아이디 유효성 검사 > 포커스 잃으면 양식 확인
userID.addEventListener("focus", () => {
  userID.setCustomValidity("");
  if (userID.value === "") {
    IDError.textContent = "";
  }
});
userID.addEventListener("blur", () => {
  userID.setCustomValidity("");
  IDError.style.color = "#eb5757";

  if (userID.validity.patternMismatch === true) {
    IDError.style.color = "#eb5757";
    userID.setCustomValidity(
      "20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다."
    );
  } else if (userID.value === "") {
    userID.setCustomValidity("필수 정보입니다.");
  } else {
    //     userID.setCustomValidity("멋진 아이디네요 :)");
    userID.setCustomValidity("");
  }

  if (!userID.checkValidity()) {
    IDError.textContent = userID.validationMessage;
  } else {
    IDError.style.color = "#21bf48";
    IDError.textContent = "멋진 아이디네요 :)";
  }
});

// 비밀번호/재확인 포커스 없을 때 아이디 입력 확인
userPW.addEventListener("blur", () => {
  if (userPW.value !== "") {
    if (userID.value === "") {
      userID.setCustomValidity("필수 정보입니다.");
      IDError.textContent = userID.validationMessage;
    }
  }
});
userPWre.addEventListener("blur", () => {
  if (userPWre.value !== "") {
    if (userID.value === "") {
      userID.setCustomValidity("필수 정보입니다.");
      IDError.textContent = userID.validationMessage;
    }
  }
});

// 재확인 입력 중 일치 확인 및 체크 활성화
userPWre.addEventListener("input", () => {
  if (userPW.value === userPWre.value) {
    if (userPW.checkValidity()) {
    }
    userPWre.classList.add("on");
  } else {
    userPWre.classList.remove("on");
  }

  // 비밀번호 입력 확인
  if (userPW.value === "") {
    userPW.setCustomValidity("필수 정보입니다.");
    passwordError.textContent = userPW.validationMessage;
  }
  //

  userPW.setCustomValidity("");
  userPWre.setCustomValidity("");

  if (userPW.value !== userPWre.value) {
    userPWre.setCustomValidity("비밀번호가 일치하지 않습니다.");
    //     return false;
  } else {
    userPWre.setCustomValidity("");
  }

  if (!userPWre.checkValidity()) {
    passwordReError.textContent = userPWre.validationMessage;
  } else {
    passwordReError.textContent = "";
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

const joinBtn = userHelp.querySelector(".joinBtn");

//입력 중 => 조건 만족하면 버튼 활성화
loginInput.addEventListener("input", () => {
  if (
    userID.checkValidity() &&
    userPW.checkValidity() &&
    userPWre.validity.valid === true &&
    userName.checkValidity() &&
    agreeTermCheck.classList.contains("on")
  ) {
    joinBtn.classList.remove("disabledBtn");
  } else {
    joinBtn.classList.add("disabledBtn");
  }
});

// 약관 동의 >> 조건 확인 및 버튼 활성화
agreeTermCheck.addEventListener("click", () => {
  agreeTermCheck.classList.toggle("on");

  if (
    userID.checkValidity() &&
    userPW.checkValidity() &&
    userPWre.validity.valid === true &&
    userName.checkValidity() &&
    agreeTermCheck.classList.contains("on")
  ) {
    joinBtn.classList.toggle("disabledBtn");
  } else {
    joinBtn.classList.add("disabledBtn");
  }
});

// agreeTermCheck.addEventListener("change", () => {
//   if (
//     userID.checkValidity() &&
//     userPW.checkValidity() &&
//     userPWre.validity.valid === true &&
//     userName.checkValidity() &&
//     agreeTermCheck.classList.contains("on")
//   ) {
//     joinBtn.classList.toggle("disabledBtn");
//   } else {
//     joinBtn.classList.add("disabledBtn");
//   }
// });

// 폼 제출
loginInput.addEventListener("submit", (e) => {
  e.preventDefault();

  userPW.setCustomValidity("");
  userPWre.setCustomValidity("");

  if (userPW.value !== userPWre.value) {
    userPWre.setCustomValidity("비밀번호가 일치하지 않습니다.");
  }

  if (!userPWre.checkValidity()) {
    passwordReError.textContent = userPWre.validationMessage;
  }

  if (
    userID.checkValidity() &&
    userPW.checkValidity() &&
    userPWre.validity.valid === true &&
    userName.checkValidity() &&
    agreeTermCheck.classList.contains("on")
  ) {
    //     joinBtn.classList.remove("disabledBtn");
    e.target.submit();
  }
});
