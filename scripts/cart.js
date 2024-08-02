// scripts/Cart.js
class Cart {
  constructor() {
    this.items = this.loadCart() || [];
  }

  // Добавление товара в корзину
  addItem(product) {
    this.items.push(product);
    this.saveCart();
  }

  // Удаление товара из корзины
  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveCart();
  }

  // Сохранение корзины в Local Storage
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  // Загрузка корзины из Local Storage
  loadCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  // Очистка корзины
  clearCart() {
    this.items = [];
    this.saveCart();
  }

  // Получение всех товаров в корзине
  getItems() {
    return this.items;
  }
}

export default Cart;
