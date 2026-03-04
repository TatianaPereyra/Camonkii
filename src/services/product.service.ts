import { GetProducts } from "@/src/libs/api";
import {  Product } from "@/src/types/product";

export async function product() : Promise<Product[]> {

    const product = await GetProducts();  //aca es donde "relaciono" la api-interface (los datos de la api pertenecen a un tipo Product)
    return product;

}