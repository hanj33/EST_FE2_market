// 회원가입
fetch("https://estapi.openmarket.weniv.co.kr/7777/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "buyer1",
    password: "weniv1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
fetch("https://estapi.openmarket.weniv.co.kr/7777/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "buyer2",
    password: "weniv1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
fetch("https://estapi.openmarket.weniv.co.kr/7777/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "buyer3",
    password: "weniv1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 회원가입이 제대로 되었는지 확인하기 위한 GET 요청
fetch("https://estapi.openmarket.weniv.co.kr/7777/login_user_info")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
