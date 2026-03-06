import Link from "next/link";

export default function NavBar(){

    return (
        <div>
            <ul>
                <Link href={'/productList'}><li>Lista de Productos</li></Link>
                <Link href={'/'}><li>Destacados</li></Link>
                <li></li>
                <li></li>
            </ul>
        </div>

    )

}