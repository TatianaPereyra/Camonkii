import { ProductList } from '@/src/components/productList.component'
import { getProducts } from '@/src/services/products.service';
import NavBar from '../../components/navBar.component';

const list = await getProducts();

export default function AllProducts(){ //La navegacion se da entre las pages, aca es desde donde accedo a la lista de componentes.

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <div>
                <ProductList products={list}/>
            </div>
           
        </div>
    )
}