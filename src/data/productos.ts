import type { Producto } from '../types'

// Datos de ejemplo. Más adelante (etapa 3) esto va a venir del backend en Node.
// Las imágenes son de relleno hasta que tengamos fotos reales de los productos.
export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Mantel de lino natural',
    descripcion: 'Mantel rectangular de lino, ideal para mesas de 6 personas.',
    precio: 28500,
    categoria: 'manteles',
    imagen: 'https://placehold.co/400x300/e8dccb/6b5844?text=Mantel+de+lino',
    stock: 5,
  },
  {
    id: 2,
    nombre: 'Centro de mesa de eucalipto',
    descripcion: 'Arreglo de eucalipto seco con velas blancas.',
    precio: 18900,
    categoria: 'centros-de-mesa',
    imagen: 'https://placehold.co/400x300/dfe5d6/4f5d45?text=Centro+de+mesa',
    stock: 3,
  },
  {
    id: 3,
    nombre: 'Set de 6 servilletas',
    descripcion: 'Servilletas de algodón con borde deshilachado.',
    precio: 12000,
    categoria: 'servilletas',
    imagen: 'https://placehold.co/400x300/f1e4dc/8a5a44?text=Servilletas',
    stock: 10,
  },
  {
    id: 4,
    nombre: 'Camino de mesa tejido',
    descripcion: 'Camino de mesa tejido a mano en tonos tierra.',
    precio: 15700,
    categoria: 'caminos-de-mesa',
    imagen: 'https://placehold.co/400x300/e6d5c3/7a5b3e?text=Camino+de+mesa',
    stock: 0,
  },
]
