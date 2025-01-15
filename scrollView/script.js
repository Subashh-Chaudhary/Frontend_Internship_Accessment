const cards = document.querySelectorAll(".card");
let currentIndex = 2; // Start with the middle card in focus
let isScrolling = false; // Prevent rapid scrolling
let timeout; // Timeout variable for debouncing

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("focus", "above", "below", "visible");
    if (index === currentIndex) {
      card.classList.add("focus", "visible");
    } else if (index === currentIndex - 1) {
      card.classList.add("above", "visible");
    } else if (index === currentIndex + 1) {
      card.classList.add("below", "visible");
    }
  });
}

function scroll(direction) {
  if (isScrolling) return; // Prevent multiple scrolls at once
  isScrolling = true;

  if (direction === "up" && currentIndex > 0) {
    currentIndex--;
  } else if (direction === "down" && currentIndex < cards.length - 1) {
    currentIndex++;
  }

  updateCards();

  // Allow scrolling again after the animation completes
  timeout = setTimeout(() => {
    isScrolling = false;
  }, 1500); // Matches the transition duration (0.6s)
}

// Scroll listener with debouncing
window.addEventListener("wheel", (e) => {
  // If timeout exists, clear it to debounce further scrolls
  clearTimeout(timeout);

  // Handle scroll based on the direction
  if (e.deltaY > 0) {
    scroll("down");
  } else {
    scroll("up");
  }

  // Set a timeout to prevent triggering too many scrolls in quick succession
  timeout = setTimeout(() => {
    // Allow scroll handling again after the animation is complete
  }, 1500); // Prevents more scroll events until animation completes
});

// Initialize the card positions
updateCards();
