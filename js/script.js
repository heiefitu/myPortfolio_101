// Init all variables
const navbar = document.querySelector(".navbar");

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});

// Tab switching function
document.getElementById("skills-tab").addEventListener("click", function (e) {
  e.preventDefault();
  showTab("skills-content");
  setActiveTab(this);
});

document
  .getElementById("experience-tab")
  .addEventListener("click", function (e) {
    e.preventDefault();
    showTab("experience-content");
    setActiveTab(this);
  });

document
  .getElementById("education-tab")
  .addEventListener("click", function (e) {
    e.preventDefault();
    showTab("education-content");
    setActiveTab(this);
  });

document
  .getElementById("languages-tab")
  .addEventListener("click", function (e) {
    e.preventDefault();
    showTab("languages-content");
    setActiveTab(this);
  });

function showTab(tabId) {
  // Get all tab content elements
  var contents = document.getElementsByClassName("tab-content");

  // Loop through the tab content elements and hide them
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active-content");
    contents[i].style.opacity = 0;
    contents[i].style.visibility = "hidden"; // Ensure they are hidden
    contents[i].style.display = "block"; // Reset display to block
  }

  // Show the clicked tab content
  var activeTab = document.getElementById(tabId);
  activeTab.classList.add("active-content");
  activeTab.style.opacity = 1;
  activeTab.style.visibility = "visible";
}

function setActiveTab(activeElement) {
  // Remove active class from all tabs
  var tabs = document.querySelectorAll(".about-me-tabs ul li a");
  tabs.forEach(function (tab) {
    tab.classList.remove("active-tab");
  });

  // Add active class to the clicked tab
  activeElement.classList.add("active-tab");
}

if (window.scrollY === 0) {
  navbar.classList.add('top-reached');
}

// Top reached manager
window.addEventListener("scroll", () => {

  if (window.scrollY === 0) {
    navbar.classList.add('top-reached');
  } else {
    navbar.classList.remove('top-reached');
  }
});