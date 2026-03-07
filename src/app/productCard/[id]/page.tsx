import { getProductById } from '@/src/services/products.service';
import   NavBar  from "@/src/components/navBar.component";

export default async function ProductCard({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    let { id } = await params; //destructuro

    let product = await getProductById(Number(id)); //Lo envio como un tipo number para evitar problemas con la API
    console.log(product);

    return(
        <div>
            <NavBar />
            <h2>Producto seleccionado:</h2>
            <ul>
                <li><img src={product.img} /></li>
                <li>{product.name}</li>
                <li>{product.breveDescripcion}</li>
                <li>{product.descripcionCompleta}</li>
                <li>{product.price}</li>
                <li><button>Agregar al carrito</button></li>
            </ul>
        </div>
    )

}