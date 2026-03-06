import { products } from '@/src/services/product.service';
import { ProductList } from '@/src/app/productList/productList.component'
import NavBar from "../components/navBar.component";

export default async function Home(){
    const allProducts = await products();
    let allDestacados = allProducts.filter(product => product.esDestacado);

    return (
      <div>
        <header>
            <NavBar />
        </header>
        <div>
            <ProductList products={allDestacados} />
        </div>
      </div>
    )

}