class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
    const codeVerificator = [];
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!codeVerificator.includes(code)) {
      codeVerificator.push(code);
      console.log(codeVerificator);
      this.products.push(product);
    } else {
      console.log(`It exist the product with this code yet`);
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let requestProduct = this.products.find((product) => product.id === id);
    if (requestProduct) {
      console.log(`The product with ID N° ${id} is ${requestProduct}`);
    } else {
      console.log(`Not found`);
    }
  }
}

const product = new ProductManager();

product.addProduct("jeans", "blue jeans medium", 30, true, "ABC0001", 10);
product.addProduct("shirt", "white shirt medium", 20, true, "ABC0002", 7);
product.addProduct("shoes", "black shoes 41", 22, true, "ABC0002", 15);

product.getProducts();
//console.log(product);

product.getProductById("ABC0001");
