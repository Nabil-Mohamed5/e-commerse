let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(name, price) {
  basket.push({ name, price });
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasket();
  showNotification();
}

function removeFromBasket(index) {
  basket.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(basket));
  updateBasket();
}

function updateBasket() {
  const basketItems = document.getElementById("basket-items");
  basketItems.innerHTML = "";
  let total = 0;

  basket.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "ml-2 bg-red-600 text-white px-2 py-1";
    removeButton.onclick = () => removeFromBasket(index);
    li.appendChild(removeButton);
    basketItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total-price").textContent = total.toFixed(2);
}

function toggleBasket() {
  const basket = document.getElementById("basket");
  basket.classList.toggle("translate-x-full");
}

function showNotification() {
  const notification = document.getElementById("notification");
  notification.classList.remove("opacity-0");
  setTimeout(() => {
    notification.classList.add("opacity-0");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", updateBasket);

function logout() {
  localStorage.setItem("prevent", "false");
  location.href = "index.html";
}
