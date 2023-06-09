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

const tabNavItems = document.querySelectorAll(".navbar_item");
const tabItems = document.querySelectorAll(".tab_item");

function activateTab(tab) {
  // deactivate all tabs
  tabNavItems.forEach((item) => {
    item.classList.remove("active");
  });
  tabItems.forEach((item) => {
    item.classList.remove("active");
  });

  // activate selected tab
  const selectedTabNav = document.querySelector(`[data-tab=${tab}]`);
  const selectedTab = document.querySelector(`.tab_item[data-tab=${tab}]`);
  selectedTabNav.classList.add("active");
  selectedTab.classList.add("active");
}

tabNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    activateTab(item.dataset.tab);
  });
});

const encEmail = "aW5mb0BhbmRyZW1hcnRpbnMuZGV2";
const emailForm = document.getElementById("contact_email");
emailForm.setAttribute("href", "mailto:".concat(atob(encEmail)));

const encPhone = "OTEyNTc3NDE5";
const phoneForm = document.getElementById("contact_phone");
phoneForm.setAttribute("href", "https://wa.me/".concat(atob(encPhone)));

const encGithub = "aHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hbmRyZW1hMTM=";
const githubForm = document.getElementById("contact_github");
githubForm.setAttribute("href", atob(encGithub));

const encLinkedin = "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FtLWRldg==";
const linkedinForm = document.getElementById("contact_linkedin");
linkedinForm.setAttribute("href", atob(encLinkedin));