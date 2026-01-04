import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground" />
            <span className="text-lg font-bold tracking-tight">ATELIER</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">
              브랜드 소개
            </a>
            <a href="#collections" className="text-sm hover:text-accent transition-colors">
              컬렉션
            </a>
            <a href="#story" className="text-sm hover:text-accent transition-colors">
              스토리
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              문의
            </a>
            <Link href="/careers" className="text-sm hover:text-accent transition-colors">
              채용정보
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              쇼핑몰 방문
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
