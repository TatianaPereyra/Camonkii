import { Product } from '@/src/types/product';
import Link from 'next/link';

export function ProductList({ products }: { products: Product[] } ) { //Componentes comienzan con mayuscula
    
    return (
            <ul>
                {products.map((product) => 
                <li key={product.id}>
                    <img src={product.img}/>
                    <h2>{product.name}</h2>
                    <p>{product.breveDescripcion}</p>
                   <Link href={`/productCard/${product.id}`}><button>Ver más</button></Link>
                </li>)}
            </ul>

    )

    
}