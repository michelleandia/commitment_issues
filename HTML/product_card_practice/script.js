const btn = document.getElementById("addToCartBtn");
const msg = document.getElementById("cartMsg");

btn.addEventListener("click", () => {
  msg.textContent = "🛒 Added to cart!";
  setTimeout(() => {
    msg.textContent = "";
  }, 2000);
});
