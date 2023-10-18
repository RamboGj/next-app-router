"use client"

import { useState } from "react"

export function AddToCartButton() {
  const [count, setCount] = useState<number>(0)

  function addCount() {
    setCount((prev) => prev + 1)
  }

  return <button onClick={addCount}>Add to cart: ({ count })</button>
}