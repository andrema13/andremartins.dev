"use strict";

// element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// custom select variables
// const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", () => elementToggleFunc(this));

// add event in all select items
for (let selectItem = 0; selectItem < selectItems.length; selectItem++) {
  selectItems[selectItem].addEventListener("click", () => {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
  for (let filterItem = 0; filterItem < filterItems.length; filterItem++) {
    if (selectedValue === "all") {
      filterItems[filterItem].classList.add("active");
    } else if (selectedValue === filterItems[filterItem].dataset.category) {
      filterItems[filterItem].classList.add("active");
    } else {
      filterItems[filterItem].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

lastClickedBtn?.addEventListener("click", () => {
  let selectedValue = this.innerText.toLowerCase();
  selectValue.innerText = this.innerText;
  filterFunc(selectedValue);

  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let navLink = 0; navLink < navigationLinks.length; navLink++) {
  navigationLinks[navLink].addEventListener("click", () => {
    for (let page = 0; page < pages.length; page++) {
      if (navigationLinks[navLink].innerHTML.toLowerCase() === pages[page].dataset.page) {
        pages[page].classList.add("active");
        navigationLinks[navLink].classList.add("active");
      } else {
        pages[page].classList.remove("active");
        navigationLinks[navLink]?.classList.remove("active");
      }
    }
  });
}
