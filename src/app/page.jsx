import { getProducts } from '@/src/services/products.service';
import { ProductList } from '@/src/components/productList.component'
import NavBar from "../components/navBar.component";

export default async function Home(){
    const allProducts = await getProducts();
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