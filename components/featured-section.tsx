import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function FeaturedSection() {
  return (
    <section id="collections" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-4">혁신과 전통의 만남</h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                최신 트렌드와 전통적인 제작 기법을 결합하여 독보적인 스타일을 선보입니다
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="/elegant-fashion-clothing-display.jpg"
                alt="Spring Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-background">
                <h3 className="text-2xl font-serif mb-2">Spring Collection 2024</h3>
                <p className="text-sm opacity-90 mb-4">새로운 시즌을 위한 감각적인 라인업</p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="group/btn bg-background/90 hover:bg-background text-foreground"
                >
                  자세히 보기
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="relative aspect-[3/2] bg-muted rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/premium-fashion-accessories.jpg"
                  alt="Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="text-xl font-serif mb-2">Accessories</h3>
                  <p className="text-sm opacity-90">완성도를 높이는 디테일</p>
                </div>
              </div>

              <div className="relative aspect-[3/2] bg-muted rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/sustainable-fashion-fabrics.jpg"
                  alt="Sustainable Materials"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="text-xl font-serif mb-2">Sustainable Fabrics</h3>
                  <p className="text-sm opacity-90">친환경 소재로 만든 미래</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
