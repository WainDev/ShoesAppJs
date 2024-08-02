document.addEventListener("DOMContentLoaded", () => {
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
      ({ ProductImage, Producttitle, ProductPrice }) => {
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
          <button class="button">В корзину</button>
        </div>
      `;
        return CardProduct;
      }
    );

    CardProducts.forEach((card) => container.appendChild(card));
  }

  GetProduct();
});
