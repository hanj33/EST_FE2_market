const imageSlideContainer = document.querySelector(".imageSlideContainer");
const slideArrowLeft = imageSlideContainer.querySelector(".slideArrowLeft");
const imageSlide = imageSlideContainer.querySelector(".imageSlide");
const imageSlideBar = imageSlideContainer.querySelector(".imageSlideBar");
const imageSlideBarBtn = imageSlideBar.querySelectorAll("button");
const slideArrowRight = imageSlideContainer.querySelector(".slideArrowRight");

// 이미지 개수
const imageSlideLength =
  imageSlide.querySelectorAll(".imageSlideImgCell").length - 1;
let cellCount = 0;

// function prevSlide() {
//   if (cellCount !== 0) {
//     cellCount--;
//     imageSlideContainer.style.transform = `translateX(${cellCount * -192} rem`;

//     console.log(cellCount);
//   } else {
//     cellCount = imageSlideLength;
//     imageSlideContainer.style.transform = `translateX(${
//       imageSlideLength * -192
//     } rem`;

//     console.log(cellCount);
//   }
// }
// function nextSlide() {
//   if (cellCount !== imageSlideLength) {
//     imageSlideContainer.style.transform = `translateX(${
//       (cellCount + 1) * -192
//     } rem`;
//     cellCount++;

//     console.log(cellCount);
//   } else {
//     cellCount = 0;
//     imageSlideContainer.style.transform = `translateX(0px)`;

//     console.log(cellCount);
//   }
// }

// slideArrowLeft.addEventListener("click", prevSlide);
// slideArrowRight.addEventListener("click", nextSlide);

slideArrowLeft.addEventListener("click", () => {});
