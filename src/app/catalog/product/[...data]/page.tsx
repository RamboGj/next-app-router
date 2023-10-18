import { AddToCartButton } from "@/components/Buttons/AddToCartButton"

interface ProductProps {
  data: {
    params: string[]
  }
}

export default async function Product({ data: { params } }: ProductProps) {
  const response = await fetch("https://api.github.com/users/RamboGj")
  const user = await response.json()

  const [productId, size, color] = params

  return (
    <div>
      <p>Product ID: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}