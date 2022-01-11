import axios from "axios";

const PRODUCT_BASE_URL = "localhost:8080/api/v1";

class ProductService {
  getAllProducts() {
    return axios.get(PRODUCT_BASE_URL + "/products");
  }
  getProductsByCategory(category) {
    return axios.get(PRODUCT_BASE_URL + "/products/" + category);
  }

  getProductById(id) {
    return axios.get(PRODUCT_BASE_URL + "/product/" + id);
  }
}
export default new ProductService();
