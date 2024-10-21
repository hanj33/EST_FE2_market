const buyProduct = document.querySelector(".buyProduct");

const productCount = document.querySelector(".productCount");
const minusBtn = productCount.querySelector(".minusBtn");
let productCountNum = productCount.querySelector("input");
const plusBtn = productCount.querySelector(".plusBtn");

const loginModal = document.querySelector(".loginModal");
const exitBtn = loginModal.querySelector(".exitBtn");
const loginNoBtn = loginModal.querySelector(".loginNoBtn");

exitBtn.addEventListener("click", () => {
  loginModal.classList.remove("on");
});
loginNoBtn.addEventListener("click", () => {
  loginModal.classList.remove("on");
});

const buyItBtn = buyProduct.querySelector(".buyItBtn");
const goToCart = buyProduct.querySelector(".goToCart");

buyItBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("on");
});
goToCart.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("on");
});

// let priceNum = buyProduct.querySelector("priceNum");

const totalCountNum = buyProduct.querySelector(".totalCountNum");
const totalPriceNum = buyProduct.querySelector(".totalPriceNum");

let productTotalPrice = 0; // 총 구매액

function minusProduct() {
  if (productCountNum.value > 1) {
    productCountNum.value--;
    totalCountNum.textContent = productCountNum.value;

    productTotalPrice = Number(totalCountNum.textContent) * 17500;

    totalPriceNum.textContent = productTotalPrice.toLocaleString();
  }
}

function plusProduct() {
  productCountNum.value++;
  totalCountNum.textContent = productCountNum.value;

  productTotalPrice = Number(totalCountNum.textContent) * 17500;

  totalPriceNum.textContent = productTotalPrice.toLocaleString();
}

minusBtn.addEventListener("click", minusProduct);
plusBtn.addEventListener("click", plusProduct);

productCountNum.addEventListener("input", () => {
  totalCountNum.textContent = productCountNum.value;

  productTotalPrice = Number(totalCountNum.textContent) * 17500;

  totalPriceNum.textContent = productTotalPrice.toLocaleString();
});

const productDetail = document.querySelector(".productDetail");
const detail = productDetail.querySelector(".detail");
const review = productDetail.querySelector(".review");
const qna = productDetail.querySelector(".qna");
const recall = productDetail.querySelector(".recall");

const productDetailContainer = document.querySelector(
  ".productDetailContainer"
);
const productDetailDetail = productDetailContainer.querySelector(
  ".productDetailDetail"
);
const productDetailReview = productDetailContainer.querySelector(
  ".productDetailReview"
);
const productDetailQna =
  productDetailContainer.querySelector(".productDetailQna");
const productDetailRecall = productDetailContainer.querySelector(
  ".productDetailRecall"
);

detail.addEventListener("click", () => {
  productDetailDetail.classList.add("on");

  productDetailReview.classList.remove("on");
  productDetailQna.classList.remove("on");
  productDetailRecall.classList.remove("on");

  if (detail.classList.contains("disabledBtn")) {
    detail.classList.remove("disabledBtn");
    detail.classList.add("activeBtn");

    review.classList.add("disabledBtn");
    qna.classList.add("disabledBtn");
    recall.classList.add("disabledBtn");
  }
});

review.addEventListener("click", () => {
  productDetailDetail.classList.remove("on");

  productDetailReview.classList.add("on");

  productDetailQna.classList.remove("on");
  productDetailRecall.classList.remove("on");

  if (review.classList.contains("disabledBtn")) {
    review.classList.remove("disabledBtn");
    review.classList.add("activeBtn");

    detail.classList.add("disabledBtn");
    qna.classList.add("disabledBtn");
    recall.classList.add("disabledBtn");
  }
});

qna.addEventListener("click", () => {
  productDetailDetail.classList.remove("on");
  productDetailReview.classList.remove("on");

  productDetailQna.classList.add("on");

  productDetailRecall.classList.remove("on");

  if (qna.classList.contains("disabledBtn")) {
    qna.classList.remove("disabledBtn");
    qna.classList.add("activeBtn");

    detail.classList.add("disabledBtn");
    review.classList.add("disabledBtn");
    recall.classList.add("disabledBtn");
  }
});

recall.addEventListener("click", () => {
  productDetailDetail.classList.remove("on");
  productDetailReview.classList.remove("on");
  productDetailQna.classList.remove("on");

  productDetailRecall.classList.add("on");

  if (recall.classList.contains("disabledBtn")) {
    recall.classList.remove("disabledBtn");
    recall.classList.add("activeBtn");

    detail.classList.add("disabledBtn");
    review.classList.add("disabledBtn");
    qna.classList.add("disabledBtn");
  }
});
