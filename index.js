import ProductsManager from '../productos/ProductsManager.js';
import CartManager from '../productos/CartManager.js';


const deposito = new ProductsManager('./files/Productos.json');
const cartDepo = new CartManager('./files/carts.json');


const env = async () => {
    const productos = await deposito.getProduct();
    console.log(productos);
    const carts = await cartDepo.getCarts();
    console.log(carts);

     const producto = {
        id: '1',
        title: 'sigas 32',
        description: 'fusion',
        code: '10',
        price: '10000',
        status: Boolean,
        stock: '100',
        category: 'caños',
        thumbnail: null 
       
     };

     await deposito.createProduct(producto);
    const depositoResult = await deposito.getProduct();
    console.log(depositoResult);
    await cartDepo.createCarts(producto);
    const cartDepoResult = await cartDepo.getCarts();
    console.log(cartDepoResult);
};
