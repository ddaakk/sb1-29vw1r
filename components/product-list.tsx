import { ProductCard } from "@/components/product-card"

interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

interface ProductListProps {
  title: string
  products: Product[]
}

export function ProductList({ title, products }: ProductListProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}