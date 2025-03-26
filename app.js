function toggleBox(index) {
  document.querySelectorAll(".box").forEach((box, i) => {
    if (i + 1 === index) {
      box.classList.toggle("open"); // Toggle open state for the clicked box
    } else {
      box.classList.remove("open"); // Close all other boxes
    }
  });
}
