import { get } from "http";
import { Product } from "../types/product";

const url = "https://685034f2e7c42cfd1797d7a0.mockapi.io/api/camonkii/products";

//asincronica porque pido la conexion a la api en productos
export async function getAllProducts(): Promise<Product[]> { 

  const response = await fetch(url);
  return response.json();

}

export async function getProduct(id : number ): Promise<Product>{ //envio un get con el id del producto que quiero buscar

  const response = await fetch(`${url}/${id}`);
  console.log(response)
  return response.json();


}