const buyProduct = document.querySelector(".buyProduct");

const productCount = document.querySelector(".productCount");
const minusBtn = productCount.querySelector(".minusBtn");
let productCountNum = productCount.querySelector("input");
const plusBtn = productCount.querySelector(".plusBtn");

// let priceNum = buyProduct.querySelector("priceNum");

const totalCountNum = buyProduct.querySelector(".totalCountNum");
const totalPrice = buyProduct.querySelector(".totalPrice");

let productTotalPrice = 0; // 총 구매액

function minusProduct() {
  if (productCountNum.value > 1) {
    productCountNum.value--;
    totalCountNum.textContent = productCountNum.value;

    productTotalPrice = Number(totalCountNum.textContent) * 17500;

    totalPrice.textContent = productTotalPrice.toLocaleString();
  }
}

function plusProduct() {
  productCountNum.value++;
  totalCountNum.textContent = productCountNum.value;

  productTotalPrice = Number(totalCountNum.textContent) * 17500;

  totalPrice.textContent = productTotalPrice.toLocaleString();
}

minusBtn.addEventListener("click", minusProduct);
plusBtn.addEventListener("click", plusProduct);
