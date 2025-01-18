// Ensure the DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const slider = darkModeToggle.querySelector(".slider");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Check the saved theme or default to light mode
  const isDarkMode = localStorage.getItem("theme") === "dark";

  // Apply the initial theme and set toggle slider position
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    sunIcon.style.opacity = "0";
    sunIcon.style.visibility = "hidden";
    moonIcon.style.opacity = "1";
    moonIcon.style.visibility = "visible";
    slider.style.transform = "translateX(30px)"; // Move slider to right for dark mode
  } else {
    document.body.classList.remove("dark-mode");
    sunIcon.style.opacity = "1";
    sunIcon.style.visibility = "visible";
    moonIcon.style.opacity = "0";
    moonIcon.style.visibility = "hidden";
    slider.style.transform = "translateX(0)"; // Move slider to left for light mode
  }

  // Toggle mode and update slider position when clicking the toggle button
  darkModeToggle.addEventListener("click", () => {
    const isDarkModeActive = document.body.classList.toggle("dark-mode");

    if (isDarkModeActive) {
      sunIcon.style.opacity = "0";
      sunIcon.style.visibility = "hidden";
      moonIcon.style.opacity = "1";
      moonIcon.style.visibility = "visible";
      slider.style.transform = "translateX(30px)"; // Slide to the right
      localStorage.setItem("theme", "dark");
    } else {
      sunIcon.style.opacity = "1";
      sunIcon.style.visibility = "visible";
      moonIcon.style.opacity = "0";
      moonIcon.style.visibility = "hidden";
      slider.style.transform = "translateX(0)"; // Slide to the left
      localStorage.setItem("theme", "light");
    }
  });

  // Reusable function for collapsible sections
function initializeCollapsible(toggleSelector, contentSelector) {
  // Select all toggle buttons based on the given selector
  const toggleButtons = document.querySelectorAll(toggleSelector);

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Toggle 'active' class for styling
      button.classList.toggle("active");

      // Collapse all content sections except the clicked one
      document.querySelectorAll(contentSelector).forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null; // Collapse
          item.previousElementSibling.classList.remove("active"); // Remove 'active' from other buttons
        }
      });

      // Expand or collapse the current content
      if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand
      }
    });
  });
}

// Initialize collapsible sections for various sections
initializeCollapsible(".toggle-btn", ".collapsible-content"); // Postgraduate Project
initializeCollapsible(".about-me-toggle-btn", ".about-me-collapsible-content"); // About Me Section

});
