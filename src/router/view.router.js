import { Router } from  "express"
import ProductManager from "../productos/ProductsManager.js"
import __dirname  from "../utils.js"

const pmanager=new ProductManager(__dirname+'/files/products.json')

const router=Router()

router.get("/",async(req,res)=>{
  const listaproductos=await pmanager.getProducts({})
  res.render("home",{allProducts})
})

router.get("/realtimeproducts",async(req,res)=>{
   res.render("realTimeProducts")
})

export default router