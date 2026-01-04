import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-balance mb-6">
            세련된 스타일과
            <br />
            완벽한 핏의 조화
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            ATELIER는 시대를 초월한 디자인과 최상의 품질로
            <br className="hidden sm:block" />
            당신만의 독특한 스타일을 완성합니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground">
              브랜드 스토리
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              컬렉션 둘러보기
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-transparent" />
      </div>
    </section>
  )
}
