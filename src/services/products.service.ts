import { getAllProducts } from "@/src/libs/productData";
import { getProduct } from "@/src/libs/productData";
import {  Product } from "@/src/types/product";

export async function getProducts() : Promise<Product[]> {

    const products = await getAllProducts();  //aca es donde "relaciono" la api-interface (los datos de la api pertenecen a un tipo Product)
    return products;

}

export async function getProductById(id : number) : Promise<Product>{
    
    let producto = getProduct(id);
    console.log(producto)
    return producto;

}