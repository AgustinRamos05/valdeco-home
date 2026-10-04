import type { Producto } from '../types'
import { formatearPrecio } from '../utils/formatearPrecio' 

type Props = {
    producto: Producto
}

function ProductCard({ producto }: Props) {
    return (
        <div className='card'>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className='cardBody'>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <span className='precio'>${formatearPrecio(producto.precio)}</span>
                {producto.stock === 0 && <span className='sin-stock'>Sin stock</span>}
            </div>
        </div>
    )
}

export default ProductCard