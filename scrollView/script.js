const cards = document.querySelectorAll(".card");
let currentIndex = 2;
let isScrolling = false;

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
  if (isScrolling) return;
  isScrolling = true;

  if (direction === "up" && currentIndex > 0) {
    currentIndex--;
  } else if (direction === "down" && currentIndex < cards.length - 1) {
    currentIndex++;
  }

  updateCards();

  setTimeout(() => {
    isScrolling = false;
  }, 600);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedScroll = debounce((direction) => scroll(direction), 250);

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      debouncedScroll("down");
    } else {
      debouncedScroll("up");
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    debouncedScroll("up");
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    debouncedScroll("down");
  }
});

document
  .getElementById("scrollUp")
  .addEventListener("click", () => debouncedScroll("up"));
document
  .getElementById("scrollDown")
  .addEventListener("click", () => debouncedScroll("down"));

updateCards();
