// 3D tilt effect
const tiltCard = document.getElementById("tilt-card");

tiltCard.addEventListener("mousemove", (e) => {
  const { width, height, left, top } = tiltCard.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  const centerX = width / 2;
  const centerY = height / 2;
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * -10;

  tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tiltCard.addEventListener("mouseleave", () => {
  tiltCard.style.transform = "rotateX(0) rotateY(0)";
});
