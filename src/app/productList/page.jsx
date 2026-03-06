import { ProductList } from '@/src/app/productList/productList.component'
import { products } from '@/src/services/product.service';
import NavBar from '../../components/navBar.component';

const list = await products();

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