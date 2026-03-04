import { product } from '@/src/services/product.service';

export async function ProductList() { //Componentes comienzan con mayuscula
    const list = await product();     //Espero la respuesta del service

    return (
        <div className='list'>
            <ul>
                {list.map((product) => 
                <li key={product.id}>
                    <img src={product.img}/>
                    <h2>{product.name}</h2>
                    <p>{product.breveDescripcion}</p>
                    <button>Ver más</button>
                </li>)}
            </ul>

        </div>

    )

    
}