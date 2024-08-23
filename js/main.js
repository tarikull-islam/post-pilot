/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("open-fly-menu"),
  navClose = document.getElementById("close-fly-menu");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    document.body.classList.add("fly-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    document.body.classList.remove("fly-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link ,.sub-nav-link");

const linkAction = () => {
  // When we click on each nav__link, we remove the fly-menu class
  document.body.classList.remove("fly-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE STICKY HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 100 of the viewport
  window.scrollY >= 100
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
};
window.addEventListener("scroll", scrollHeader);

/*=============== NOTICE TOP BAR HANDLE ===============*/
const noticeRegister = () => {
  const isHide = sessionStorage.getItem("isHide"),
    noticeBar = document.getElementById("notice-bar"),
    toggleNoticeBar = document.getElementById("notice-toggle");
  //   Add a class if sessionStorage have isHide true
  if (isHide) {
    noticeBar.classList.add("hide");
  }
  //    Notice Board Fun.. Handle and add classes
  const noticeHandle = () => {
    sessionStorage.setItem("isHide", true);
    noticeBar.classList.add("hide");
  };
  toggleNoticeBar.addEventListener("click", noticeHandle);
};
// Notice Register Function invoke
noticeRegister();

/*=============== Slider Register ===============*/
const sliderRegister = () => {
  const paginationSlider = document.querySelector("#post-pilot-dtc .wrapper");
  let isDrugStart = false,
    prevPageX,
    prevScrollLeft;
  const dragStart = (e) => {
    isDrugStart = !isDrugStart;
    prevPageX = e.pageX;
    prevScrollLeft = paginationSlider.scrollLeft;
    paginationSlider.style.cursor = "grab";
  };
  const dragStop = () => {
    isDrugStart = !isDrugStart;
  };
  const dragging = (e) => {
    if (!isDrugStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    paginationSlider.scrollLeft = prevScrollLeft - positionDiff;
  };
  paginationSlider.addEventListener("mousedown", dragStart);
  paginationSlider.addEventListener("mousemove", dragging);
  paginationSlider.addEventListener("mouseup", dragStop);
};
sliderRegister();
