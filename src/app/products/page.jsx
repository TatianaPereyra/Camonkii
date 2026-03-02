import { getProducts } from "@/lib/api.ts"

export default async function ProductsList(){
    products = await getProducts();

    return (
        <div className="productsList">
            <ul>
                {products.map((product:any) => (<h2 key={product.id}>{product.name}</h2>))}



            </ul>


        </div>
    )

}