import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-background" />
                <span className="text-lg font-bold tracking-tight">ATELIER</span>
              </Link>
              <p className="text-sm text-background/70 leading-relaxed">
                세련된 디자인과 최상의 품질로
                <br />
                당신의 스타일을 완성합니다
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">쇼핑</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    여성 컬렉션
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    남성 컬렉션
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    악세서리
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    신상품
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">회사 정보</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    브랜드 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    매장 안내
                  </a>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-background transition-colors">
                    채용 정보
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    지속가능성
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">고객 지원</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    문의하기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    배송 안내
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    반품 및 교환
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2026 ATELIER. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-background transition-colors">
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
