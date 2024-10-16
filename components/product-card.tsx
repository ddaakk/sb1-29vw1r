"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

export function ProductCard({ id, name, price, imageUrl }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <CardContent className="p-4">
        <div className="relative h-48 mb-4 overflow-hidden rounded-md">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0" />
          )}
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className={`transition-transform duration-300 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{price.toLocaleString()}원</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <ShoppingCart className="mr-2 h-4 w-4" /> 장바구니에 담기
        </Button>
      </CardFooter>
    </Card>
  )
}