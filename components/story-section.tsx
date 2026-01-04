export function StorySection() {
  return (
    <section id="story" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <img src="/fashion-atelier-workspace-craftsmanship.jpg" alt="Our Story" className="w-full h-full object-cover" />
            </div>

            <div className="lg:pr-8">
              <div className="text-sm uppercase tracking-widest text-accent mb-4">Our Story</div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
                30년 전통의
                <br />
                패션 하우스
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  1994년 서울에서 시작된 ATELIER는 한국 패션 산업과 함께 성장해왔습니다. 우리는 단순히 옷을 만드는 것이
                  아니라, 착용하는 사람의 개성과 자신감을 표현하는 도구를 만들고 있습니다.
                </p>
                <p>
                  숙련된 장인들의 손길과 최신 기술의 조화를 통해, 우리는 시대를 초월한 디자인과 완벽한 품질을
                  선보입니다. 매 시즌 선보이는 컬렉션은 전통과 혁신, 클래식과 모던의 균형을 추구합니다.
                </p>
                <p>
                  지속 가능한 패션을 위한 우리의 노력은 원료 선택부터 생산, 포장에 이르기까지 모든 과정에서 이어집니다.
                  ATELIER와 함께 더 나은 미래를 만들어가세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
