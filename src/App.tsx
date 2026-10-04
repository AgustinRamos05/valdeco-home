import { productos } from './data/productos'
import ProductCard from './components/ProductCard'
import { useState } from 'react'
import type { Categoria, ItemCarrito, Producto } from './types'


type Filtro = {
  valor: Categoria | 'todas' //El valor del filtro es en base a las categoria de 
  etiqueta: string           //los productos sumando a todas para que se muestren todos a la vez
}

const filtros: Filtro[] = [
  { valor: 'todas', etiqueta: 'Todo' },
  { valor: 'manteles', etiqueta: 'Manteles' },
  { valor: 'centros-de-mesa', etiqueta: 'Centro de Mesa' },
  { valor: 'servilletas', etiqueta: 'Servilletas' },
  { valor: 'caminos-de-mesa', etiqueta: 'Caminos de Mesa' }
]

function App() {
  //Logica para filtro por categoria
  const [categoria, setCategoria] = useState<Categoria | 'todas'>('todas')  //union Categoria | 'todas', si alguien escribe mal una categoría, TypeScript lo va a avisar.
  const productosFiltrados = productos.filter(
    (producto) => categoria === 'todas' || producto.categoria === categoria
  )
  //Logica para carrito
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])

  function agregarAlCarrito(producto: Producto) {
    const existente = carrito.find((item) => item.producto.id === producto.id)
    if (existente) {
      setCarrito(
        carrito.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }: item))
    } else {
      setCarrito([...carrito, { producto: producto, cantidad: 1 }])
    }
  }

  return (
    <>
      <header className="header">
        <h1>Valdeco Home</h1>
        <p>Manteles, centros de mesa y deco para tu hogar</p>
        {carrito.length}
      </header>
      <nav className='filtros'>
        {filtros.map((filtro) => (
          <button className={filtro.valor === categoria ? 'filtro-btn activo' : 'filtro-btn'}
            key={filtro.valor}
            onClick={() => setCategoria(filtro.valor)}>{filtro.etiqueta}
          </button>
        ))}
      </nav>
      <main className="catalogo">
        {/* .map() recorre el array y devuelve un elemento por cada producto.
            React necesita una "key" única en cada uno para saber cuál es cuál. */}
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} onAgregar={agregarAlCarrito} />
        ))}

      </main>
    </>
  )
}

export default App
