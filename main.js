document.addEventListener("DOMContentLoaded", () => {
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
});
