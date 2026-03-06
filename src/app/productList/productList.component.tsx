import { Product } from '@/src/types/product';

export function ProductList({ products }: { products: Product[] } ) { //Componentes comienzan con mayuscula
    
    return (
            <ul>
                {products.map((product) => 
                <li key={product.id}>
                    <img src={product.img}/>
                    <h2>{product.name}</h2>
                    <p>{product.breveDescripcion}</p>
                    <button>Ver más</button>
                </li>)}
            </ul>

    )

    
}