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

const loginInput = document.querySelector(".loginInput");

const userID = loginInput.querySelector("#userID");
const IDError = loginInput.querySelector(".IDError");

const userPW = loginInput.querySelector("#userPW");
const passwordError = loginInput.querySelector(".passwordError");

const userPWre = loginInput.querySelector("#userPWre");
const passwordReError = loginInput.querySelector(".passwordReError");

const userName = loginInput.querySelector("#userName");
const userNameError = loginInput.querySelector(".userNameError");

const phoneNumInput = document.querySelector(".phoneNumInput");
const userPhoneNum1 = phoneNumInput.querySelector(".userPhoneNum1");
const userPhoneNum2 = phoneNumInput.querySelector(".userPhoneNum2");

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
    IDError.style.marginBottom = "1rem";
  } else {
    IDError.style.color = "#21bf48";
    IDError.textContent = "멋진 아이디네요 :)";
    IDError.style.marginBottom = "1rem";
  }
});

// 비밀번호/재확인 포커스 없을 때 아이디 입력 확인
userPW.addEventListener("blur", () => {
  if (userPW.value !== "") {
    if (userID.value === "") {
      userID.setCustomValidity("필수 정보입니다.");
      IDError.textContent = userID.validationMessage;
      IDError.style.marginBottom = "1rem";
    } else if (userPW.validity.patternMismatch === true) {
      passwordError.style.color = "#eb5757";
      userPW.setCustomValidity(
        "8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요."
      );
      passwordError.textContent = userPW.validationMessage;
      passwordError.style.marginBottom = "1rem";
    }
  }
});
userPWre.addEventListener("blur", () => {
  if (userPWre.value !== "") {
    if (userID.value === "") {
      userID.setCustomValidity("필수 정보입니다.");
      IDError.textContent = userID.validationMessage;
      IDError.style.marginBottom = "1rem";
    }
  }
});

// 재확인 입력 중 일치 확인 및 체크 활성화
userPWre.addEventListener("input", () => {
  //   userPW.setCustomValidity("");
  //   userPWre.setCustomValidity("");

  if (userPW.value === userPWre.value) {
    //     if (userPW.checkValidity()) {
    //     }
    userPWre.classList.add("on");
  } else {
    userPWre.classList.remove("on");
  }

  // 비밀번호 입력 확인
  if (userPW.value === "") {
    userPW.setCustomValidity("필수 정보입니다.");
    passwordError.textContent = userPW.validationMessage;
    passwordError.style.marginBottom = "1rem";
  }
  //

  if (userPW.value !== userPWre.value) {
    userPWre.setCustomValidity("비밀번호가 일치하지 않습니다.");
    //     return false;
  } else {
    userPWre.setCustomValidity("");
  }

  if (!userPWre.checkValidity()) {
    passwordReError.textContent = userPWre.validationMessage;
    passwordReError.style.marginBottom = "1rem";
  } else {
    passwordReError.textContent = "";
  }
});

const joinBtn = userHelp.querySelector(".joinBtn");

//입력 중 => 조건 만족하면 버튼 활성화
loginInput.addEventListener("input", () => {
  //   userID.setCustomValidity("");
  //   userPW.setCustomValidity("");
  //   passwordError.textContent = "";
  //   userPWre.setCustomValidity("");
  //   passwordReError.textContent = "";
  //   userName.setCustomValidity("");
  //   userNameError.textContent = "";
  //   userPhoneNum1.setCustomValidity("");
  //   userPhoneNum2.setCustomValidity("");

  if (userPW.validity.patternMismatch === false) {
    userPW.setCustomValidity("");
    passwordError.textContent = "";
  }
  if (userName.validity.patternMismatch === false) {
    userName.setCustomValidity("");
    userNameError.textContent = "";
  }

  if (
    userID.checkValidity() &&
    userPW.checkValidity() &&
    userPWre.validity.valid === true &&
    userName.checkValidity() &&
    userPhoneNum1.checkValidity() &&
    userPhoneNum2.checkValidity() &&
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
    userPhoneNum1.checkValidity() &&
    userPhoneNum2.checkValidity() &&
    agreeTermCheck.classList.contains("on")
  ) {
    joinBtn.classList.toggle("disabledBtn");
  } else {
    joinBtn.classList.add("disabledBtn");
  }
});

// 폼 제출
loginInput.addEventListener("submit", (e) => {
  e.preventDefault();

  userPW.setCustomValidity("");
  userPWre.setCustomValidity("");

  if (userID.value === "") {
    userID.setCustomValidity("필수 정보입니다.");
    IDError.textContent = userID.validationMessage;
    IDError.style.marginBottom = "1rem";
  }

  if (userPW.value === "") {
    userPW.setCustomValidity("필수 정보입니다.");
    passwordError.textContent = userPW.validationMessage;
    passwordError.style.marginBottom = "1rem";
  }
  if (userPWre.value === "") {
    userPWre.setCustomValidity("필수 정보입니다.");
    passwordReError.textContent = userPWre.validationMessage;
    passwordReError.style.marginBottom = "1rem";
  }
  if (userName.value === "") {
    userName.setCustomValidity("필수 정보입니다.");
    userNameError.textContent = userName.validationMessage;
    userNameError.style.marginBottom = "1rem";
  }

  if (userPW.value !== userPWre.value) {
    userPWre.setCustomValidity("비밀번호가 일치하지 않습니다.");
  }

  if (!userPWre.checkValidity()) {
    passwordReError.textContent = userPWre.validationMessage;
    passwordReError.style.marginBottom = "1rem";
  }

  if (
    userID.checkValidity() &&
    userPW.checkValidity() &&
    userPWre.validity.valid === true &&
    userName.checkValidity() &&
    userPhoneNum1.checkValidity() &&
    userPhoneNum2.checkValidity() &&
    agreeTermCheck.classList.contains("on")
  ) {
    //     joinBtn.classList.remove("disabledBtn");
    e.target.submit();
  }
});
