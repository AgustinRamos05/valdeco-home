import type { Producto } from '../types'
import { formatearPrecio } from '../utils/formatearPrecio'

type Props = {
    producto: Producto
    onAgregar: (producto: Producto) => void
}

function ProductCard({ producto, onAgregar }: Props) {
    return (
        <div className='card'>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className='cardBody'>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <span className='precio'>${formatearPrecio(producto.precio)}</span>
                {producto.stock === 0 && <span className='sin-stock'>Sin stock</span>}
                <button className='agregar-btn' 
                        onClick={() => onAgregar(producto)}
                        disabled={producto.stock === 0}>
                        Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ProductCard