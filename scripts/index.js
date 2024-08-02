import Cart from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  const cart = new Cart();

  async function GetProduct() {
    try {
      const response = await fetch("./scripts/component/products.json");
      const products = await response.json();
      DisplayProduct(products);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }

  function DisplayProduct(products) {
    const container = document.querySelector("#cards");

    const CardProducts = products.map(
      ({ id, ProductImage, Producttitle, ProductPrice }) => {
        const CardProduct = document.createElement("div");
        CardProduct.className = "card";
        CardProduct.innerHTML = `
        <img
          src=${ProductImage}
          alt="product"
          class="card-img"
        />
        <p class="cards-title text-center">${Producttitle}</p>
        <div class="cards-info">
          <p class="info-price__title">Цена</p>
          <p class="info-price">${ProductPrice}</p>
        </div>
        <div class="cards-buttons">
          <button class="button" data-id="${id}">В корзину</button>
        </div>
      `;
        return CardProduct;
      }
    );

    if (CardProducts === 0) {
      const noProduct = document.createElement("div");
      noProduct.className = "no-product";
      noProduct.innerHTML = `<p>Нет товара</p>`;

      noProduct.forEach((card) => container.appendChild(card));
    } else {
      CardProducts.forEach((card) => container.appendChild(card));
    }

    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const ProductId = event.target.getAttribute("data-id");
        const product = products.find((id) => id.id === parseInt(ProductId));
        console.log(product);
        cart.getItems(product);
      });
    });
  }

  GetProduct();
});
