// Imports
import express from 'express';
import { Server } from 'socket.io';
import ProductRouter from "./router/product.router.js";
import CartRouter from "./router/carts.router.js";
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import ProductManager from './productos/ProductsManager.js';

const productManager = new ProductManager("./src/files/Productos.json");

//Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Static
app.use(express.static((`${__dirname}/public`)));

//Routers
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);

// Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

//Puerto de enlace
const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Express por Local Host ${server.address().port}`)
});

//Socket
const io = new Server (server);
io.on('connection', socket => {
    console.log('Nuevo cliente conectado');
    socket.on('message', data => {
        console.log(data)
    });
    socket.on('message2', data=> {
        logs.push({ socketId: socket.id, message:data});
        io.emit('log', { logs })
    });
});

server.on("error", (error) => console.log(`Error del servidor ${error}`));









