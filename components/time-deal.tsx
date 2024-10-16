"use client"

import { useState, useEffect } from 'react'
import { ProductCard } from "@/components/product-card"
import { Card, CardContent } from "@/components/ui/card"

interface TimeDealProduct {
  id: number
  name: string
  price: number
  imageUrl: string
  endTime: Date
}

interface TimeDealProps {
  products: TimeDealProduct[]
}

export function TimeDeal({ products }: TimeDealProps) {
  const [timeLeft, setTimeLeft] = useState<string[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const newTimeLeft = products.map(product => {
        const diff = product.endTime.getTime() - now.getTime()
        if (diff <= 0) return '종료'
        const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0')
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
        const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
      })
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [products])

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">오늘의 특가</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-blue-600 text-white text-center py-2 font-bold">
                남은 시간: {timeLeft[index]}
              </div>
              <ProductCard {...product} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}