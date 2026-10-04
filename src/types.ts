// Un "type" describe la forma que tiene un dato.
// TypeScript usa esto para avisarte si te olvidás un campo o pasás algo del tipo equivocado.

export type Categoria = 'manteles' | 'centros-de-mesa' | 'servilletas' | 'caminos-de-mesa'

export type Producto = {
  id: number
  nombre: string
  descripcion: string
  precio: number // en pesos, sin decimales
  categoria: Categoria
  imagen: string // URL de la foto
  stock: number
}

export type ItemCarrito = {
  producto : Producto
  cantidad: number
}