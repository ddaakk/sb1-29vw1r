import { HeroSection } from "@/components/hero-section"
import { CategoryList } from "@/components/category-list"
import { TimeDeal } from "@/components/time-deal"
import { ProductList } from "@/components/product-list"
import { Footer } from "@/components/footer"

// 임시 데이터 (기존과 동일)
const randomProducts = [
  { id: 1, name: "스마트폰", price: 800000, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "노트북", price: 1200000, imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww" },
  { id: 3, name: "헤드폰", price: 300000, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "스마트워치", price: 250000, imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D" },
]

const popularProducts = [
  { id: 5, name: "커피머신", price: 200000, imageUrl: "https://images.unsplash.com/photo-1517914309068-900b5baa0a54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 6, name: "블루투스 스피커", price: 150000, imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, name: "디지털 카메라", price: 600000, imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 8, name: "게이밍 마우스", price: 80000, imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D" },
]

const timeDealProducts = [
  { id: 9, name: "스마트 TV", price: 1000000, imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D", endTime: new Date(Date.now() + 3600000) },
  { id: 10, name: "태블릿", price: 500000, imageUrl: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFibGV0fGVufDB8fDB8fHww", endTime: new Date(Date.now() + 7200000) },
  { id: 11, name: "무선 이어폰", price: 180000, imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lyZWxlc3MlMjBlYXJwaG9uZXN8ZW58MHx8MHx8fDA%3D", endTime: new Date(Date.now() + 10800000) },
  { id: 12, name: "스마트 홈 허브", price: 120000, imageUrl: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBob21lfGVufDB8fDB8fHww", endTime: new Date(Date.now() + 14400000) },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <CategoryList />
        <TimeDeal products={timeDealProducts} />
        <ProductList title="인기 상품" products={popularProducts} />
        <ProductList title="추천 상품" products={randomProducts} />
      </div>
      <Footer />
    </main>
  )
}