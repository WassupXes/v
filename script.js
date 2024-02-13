const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Arrays of GIF URLs
const gifUrls = [
  "https://media0.giphy.com/media/S8rv3eZBiseRyzfIF5/giphy.gif?cid=ecf05e473m87tfvh8miey1jsyg7u54c1s28y04a9j2uxdpf5&ep=v1_gifs_related&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/huPOZgjL4SWzLkJwH2/giphy.gif?cid=ecf05e473m87tfvh8miey1jsyg7u54c1s28y04a9j2uxdpf5&ep=v1_gifs_related&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/hoBKWdkG9kT5MkChjR/giphy.gif?cid=ecf05e473m87tfvh8miey1jsyg7u54c1s28y04a9j2uxdpf5&ep=v1_gifs_related&rid=giphy.gif&ct=s"
];

const texts = [
  "Are you sure???",
  "Jadi maksud iwan tadi itu..",
  "Iwan to be your girl friend "
];

function hideButtons() {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

let currentGifIndex = 0;
let clickCount = 0;

yesBtn.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 4) {
    // Redirect to another HTML file after the third click
    window.location.href = "valentine.html";
    return;
  }

  if (clickCount === 2) {
    // Change the text of the third button
    yesBtn.innerHTML = "apaa";
  }

  if (clickCount === 3) {
    // Change the text of the third button
    yesBtn.innerHTML = "teruss";
  }

  if (clickCount === 1) {
    // Change the text of the third button
    yesBtn.innerHTML = "100% sure";
  }

  if (clickCount === 1) {
    // Change the text of the third button
    noBtn.innerHTML = "I am not sure";
  }

  if (clickCount === 2) {
    // Change the text of the third button
    noBtn.innerHTML = "No";
  }

  if (clickCount === 3) {
    // Change the text of the third button
    noBtn.innerHTML = "Tombol Rusak";
  }

  // if (clickCount >= 2) {
  //   noBtn.style.display = "none";
  // }

  if (currentGifIndex < gifUrls.length) {
    question.innerHTML = texts[currentGifIndex];
    gif.src = gifUrls[currentGifIndex];
    currentGifIndex++;
  } else {
    currentGifIndex = 0;
    question.innerHTML = texts[currentGifIndex];
    gif.src = gifUrls[currentGifIndex];
    currentGifIndex++;
  }

  // Hide buttons after the second click
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
