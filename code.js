class ProductManager {
  constructor() {
    this.products = [];
    this.codeVerificator = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!this.codeVerificator.includes(code)) {
      this.codeVerificator.push(code);
      this.products.push(product);
    } else {
      console.log(`--> It exist the product with this code ${code} yet`);
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const productById = this.products.find((product) => product.id === id);
    if (productById) {
      console.log(productById);
    } else {
      console.log(`--> Not found`);
    }
  }
}

const product = new ProductManager();

product.addProduct("jeans", "blue jeans medium", 30, true, "ABC0001", 10);
product.addProduct("shirt", "white shirt medium", 20, true, "ABC0002", 7);
product.addProduct("shoes", "black shoes 41", 22, true, "ABC0002", 15);

console.log(product.getProducts());

product.getProductById(2);
