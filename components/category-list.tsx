"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Category {
  id: number
  name: string
  imageUrl: string
}

const categories: Category[] = [
  { id: 1, name: "의류", imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "전자기기", imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "식품", imageUrl: "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyaWVzfGVufDB8fDB8fHww" },
  { id: 4, name: "가구", imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww" },
  { id: 5, name: "도서", imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D" },
  { id: 6, name: "스포츠", imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww" },
  { id: 7, name: "뷰티", imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
  { id: 8, name: "자동차", imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww" },
]

export function CategoryList() {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({})

  const handleCategoryClick = (categoryId: number, categoryName: string) => {
    console.log(`카테고리 클릭: ${categoryName} (ID: ${categoryId})`)
    // 여기에 나중에 페이지 이동 로직을 추가할 수 있습니다.
  }

  const handleImageLoad = (categoryId: number) => {
    setLoadedImages(prev => ({ ...prev, [categoryId]: true }))
  }

  return (
    <section className="my-12">
    
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className="flex flex-col items-center justify-center h-40 text-center rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors p-2"
            onClick={() => handleCategoryClick(category.id, category.name)}
          >
            <div className="relative w-24 h-24 mb-2">
              {!loadedImages[category.id] && (
                <Skeleton className="absolute inset-0 rounded-full" />
              )}
              <Image
                src={category.imageUrl}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className={`rounded-full transition-opacity duration-300 ${
                  loadedImages[category.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(category.id)}
              />
            </div>
            <span className="text-sm">{category.name}</span>
          </Button>
        ))}
      </div>
    </section>
  )
}