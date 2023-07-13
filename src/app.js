// Imports
import express from 'express';
import ProductRouter from "./router/product.router.js";
import CartRouter from "./router/carts.router.js";
import {engine} from "express-handlebars";
import * as path from "path";
import __dirname from './utils.js';
import ProductManager from './productos/ProductsManager.js';

const productManager = new ProductManager("./src/files/Productos.json");


//Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Routers
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);

//Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname + "/views"));

//static
app.use("/", express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
    let allProducts = await productManager.getProduct
    res.render("home",{
        title:"Express avanzado | handlebars ",
        products: allProducts
    });
});

//Puerto de enlace
const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Express por Local Host ${server.address().port}`)
});
server.on("error", (error) => console.log(`Error del servidor ${error}`));








