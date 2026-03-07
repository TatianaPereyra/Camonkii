import Link from "next/link";

export default function NavBar(){

    return (
        <div>
            <ul>
                <Link href={'/allProducts'}><li>Lista de Productos</li></Link>
                <Link href={'/'}><li>Productos Destacados</li></Link>
                <li>Mi Carrito</li>
                <li></li>
            </ul>
        </div>

    )

}