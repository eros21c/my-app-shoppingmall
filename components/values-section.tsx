export function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "지속 가능한 패션",
      description: "환경을 생각하는 친환경 소재와 윤리적인 생산 과정을 통해 지속 가능한 패션을 만들어갑니다",
    },
    {
      number: "02",
      title: "장인 정신",
      description: "수십 년의 경험을 가진 장인들이 하나하나 정성스럽게 제작하여 최상의 품질을 보장합니다",
    },
    {
      number: "03",
      title: "타임리스 디자인",
      description: "유행을 따르기보다 시간이 지나도 변하지 않는 클래식한 아름다움을 추구합니다",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-center mb-4">우리의 가치</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            ATELIER가 추구하는 핵심 가치는 우리의 모든 제품과 서비스에 녹아있습니다
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value) => (
              <div key={value.number} className="text-center md:text-left">
                <div className="text-6xl font-serif text-accent/20 mb-4">{value.number}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
