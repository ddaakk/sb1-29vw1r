import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 서비스</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">반품 및 환불</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">배송 정보</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">주문 조회</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">회사 소개</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">채용 정보</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">이용약관</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">개인정보처리방침</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                <Facebook />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                <Twitter />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                <Instagram />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                <Youtube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
            <p className="mb-4">최신 상품 정보와 특별 할인 소식을 받아보세요!</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="이메일 주소" />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">구독하기</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2023 트렌디샵. All rights reserved.
        </div>
      </div>
    </footer>
  )
}