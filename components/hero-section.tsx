"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Skeleton } from "@/components/ui/skeleton"

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.onload = () => setLogoLoaded(true)
    img.src = "/logo.png"
  }, [])

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            {!logoLoaded ? (
              <Skeleton className="w-10 h-10 rounded-full" />
            ) : (
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            )}
            <span className="ml-2 text-xl font-bold">트렌디샵</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">홈</a>
            <a href="#" className="hover:text-blue-200 transition-colors">카테고리</a>
            <a href="#" className="hover:text-blue-200 transition-colors">특가</a>
            <a href="#" className="hover:text-blue-200 transition-colors">고객센터</a>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" className="text-white">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="outline" className="hidden md:inline-flex bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              로그인
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
            <div className="container mx-auto px-4 py-4">
              <a href="#" className="block py-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300">홈</a>
              <a href="#" className="block py-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300">카테고리</a>
              <a href="#" className="block py-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300">특가</a>
              <a href="#" className="block py-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300">고객센터</a>
              <Button variant="outline" className="mt-4 w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">로그인</Button>
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">트렌디한 쇼핑의 시작</h1>
          <p className="text-xl mb-8">최신 트렌드와 특별한 할인, 모두 여기서 만나보세요</p>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}