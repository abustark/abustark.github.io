// Ensure the DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  // Lazy load images in the screenshots section
  document.querySelectorAll('.screenshots img').forEach(img => {
    img.loading = 'lazy';
  });

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

  // NEW CODE: Keyboard Accessibility for Dark Mode Toggle
  darkModeToggle.setAttribute('role', 'switch');
  darkModeToggle.setAttribute('aria-checked', isDarkMode);
  darkModeToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      darkModeToggle.click();
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

  // NEW CODE: Typewriter Effect
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Apply typewriter effect to the introduction paragraph
  const introText = document.querySelector('#home p');
  if (introText) {
    const originalText = introText.textContent;
    introText.innerHTML = ''; // Clear the content to simulate typing
    typeWriter(introText, originalText);
  }

  // NEW CODE: Fade-in animations for sections on scroll
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in"); // Add the fade-in class
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Select all skill bars
const skillBars = document.querySelectorAll(".skill");

// Loop through each skill bar
skillBars.forEach((bar) => {
  // Get the percentage value from the data-percentage attribute
  const percentage = bar.getAttribute("data-percentage");
  
  // Set the CSS variable --width to the percentage value
  bar.style.setProperty('--width', `${percentage}%`);
});
