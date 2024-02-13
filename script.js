const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickedOnce = false;

yesBtn.addEventListener("click", () => {
  if (clickedOnce) {
    // Redirect to index.html if clicked for the second time
    window.location.href = "suprise.html";
  } else {
    // Change text and GIF on first click
    question.innerHTML = "My Special Friend😘!";
    gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
    yesBtn.disabled = true; // Disable the button initially
    yesBtn.style.backgroundColor = "#ff3860"; // Change background color to yellow (or any color you prefer)

    // Hide the "Click me again" button initially
    yesBtn.style.display = "none";

    // Show the "Click me again" button after 5 seconds
    setTimeout(() => {
      yesBtn.style.display = "block";
      yesBtn.innerHTML = "Click me again";
      yesBtn.style.margin = "auto"; // Center the button
      yesBtn.disabled = false; // Enable the button after 5 seconds
    }, 5000); // 5 seconds delay
    clickedOnce = true;

    // Hide the "No" button
    noBtn.style.display = "none";
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
