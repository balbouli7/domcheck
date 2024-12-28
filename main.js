document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".card");
  const totalPriceElement = document.querySelector(".total");
  
  products.forEach(product => {
    const plusButton = product.querySelector(".fa-plus-circle");
    const minusButton = product.querySelector(".fa-minus-circle");
    const quantityElement = product.querySelector(".quantity");
    const unitPriceElement = product.querySelector(".unit-price");
    const deleteButton = product.querySelector(".fa-trash-alt");
    const likeButton = product.querySelector(".fa-heart");

    let quantity = 0;
    const unitPrice = parseFloat(unitPriceElement.textContent.replace(" $", ""));

    const updateTotalPrice = () => {
      const total = Array.from(products).reduce((acc, card) => {
        const qty = parseInt(card.querySelector(".quantity").textContent);
        const price = parseFloat(card.querySelector(".unit-price").textContent.replace(" $", ""));
        return acc + (qty * price);
      }, 0);
      totalPriceElement.textContent = `${total} $`;
    };

    plusButton.addEventListener("click", () => {
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    });

    minusButton.addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    });

deleteButton.addEventListener("click", () => {
  quantity = 0;
  quantityElement.textContent = quantity; 
  updateTotalPrice(); 
});

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("liked");
    });
  });
});








