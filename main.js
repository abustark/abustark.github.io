// Ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the toggle button, body, and the sun/moon icons
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Check localStorage for the dark mode preference
  const isDarkMode = localStorage.getItem("dark-mode");

  if (isDarkMode === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.classList.add("active"); // Set the toggle to active state if dark mode is saved
  }

  // Add an event listener to toggle dark mode on button click
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleButton.classList.toggle("active"); // Toggle the active class for the button

    // Toggle the icons visibility
    sunIcon.style.display = body.classList.contains("dark-mode") ? "none" : "inline";
    moonIcon.style.display = body.classList.contains("dark-mode") ? "inline" : "none";

    // Save the user's preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
