document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Function to update icon visibility
  function updateIcons() {
    if (body.classList.contains("dark-mode")) {
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
    } else {
      sunIcon.style.display = "inline";
      moonIcon.style.display = "none";
    }
  }

  // Set initial icon state
  updateIcons();

  // Toggle dark mode, slider position, and update icons
  toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.classList.toggle("active");
  updateIcons();
});
});
