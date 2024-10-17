const loginSection = document.querySelector(".login");

const loginInput = document.querySelector(".loginInput");

const userID = loginSection.querySelector("#userID");
const userPW = loginSection.querySelector("#userPW");

const loginError = loginSection.querySelector(".loginError");

const loginBtn = loginSection.querySelector("button");

loginInput.addEventListener("submit", (e) => {
  e.preventDefault();

  userID.setCustomValidity("");
  userPW.setCustomValidity("");

  if (userID.value === "") {
    userID.setCustomValidity("아이디를 입력해 주세요.");
  } else if (userID.value === "" && userPW.value === "") {
    userID.setCustomValidity("아이디를 입력해 주세요.");
  } else if (userPW.value === "") {
    userPW.setCustomValidity("비밀번호를 입력해 주세요.");
  }

  if (!userID.checkValidity()) {
    loginError.textContent = userID.validationMessage;
    userPW.style.marginBottom = "2.6rem";
    loginError.style.marginBottom = "2.6rem";
  } else if (!userPW.checkValidity()) {
    loginError.textContent = userPW.validationMessage;
    userPW.style.marginBottom = "2.6rem";
    loginError.style.marginBottom = "2.6rem";
  }

  if (userID.checkValidity() && userPW.checkValidity()) {
    e.target.submit();
  }
});
