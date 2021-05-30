import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v2/products"

class ProductService{
    //ฟีเจอร์สินค้าที่ขาย มีเพิ่ม edit ลบ เรียกดูของในสต็อกทั้งหมด
    //ฟีเจอร์สินค้าที่ถูกใจ มีเพิ่ม ลบ เรียกดูทั้งหมด
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }
    editProductById(productId, product){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product);
    }
    getProductByOwner(productOwner){
        console.log("inside"+productOwner);
        return axios.get(PRODUCT_API_BASE_URL+'/owner?owner='+productOwner);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL+ '/' + productId);
    }
}

export default new ProductService()