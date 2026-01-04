import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>

            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">
                채용정보
              </h1>
              <p className="text-lg text-muted-foreground">
                ATELIER와 함께 성장할 인재를 찾습니다
              </p>
            </div>

            {/* Job Posting */}
            <div className="bg-card border border-border rounded-lg p-8 lg:p-12 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2 font-serif">
                  마케팅 디렉터 (MD) 채용
                </h2>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <span>정규직</span>
                  <span>•</span>
                  <span>서울</span>
                  <span>•</span>
                  <span>상시채용</span>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">주요 업무</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>브랜드 마케팅 전략 수립 및 실행</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>온라인/오프라인 마케팅 캠페인 기획 및 운영</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>소셜 미디어 및 디지털 마케팅 관리</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>제품 기획 및 MD 업무 (상품 선택, 가격 책정, 재고 관리)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>시장 동향 분석 및 경쟁사 분석</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>컨텐츠 기획 및 크리에이티브 디렉션</span>
                  </li>
                </ul>
              </div>

              {/* Qualifications */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">자격 요건</h3>
                <div className="bg-muted/50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>패션/뷰티/라이프스타일 관련 업계 경력 3년 이상</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>MD(Merchandising) 업무 경험 필수</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>마케팅 전략 수립 및 실행 경험</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>디지털 마케팅 및 소셜 미디어 운영 경험</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>데이터 분석 능력 및 엑셀 활용 능력 우수</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>트렌드에 대한 높은 감각과 분석력</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>커뮤니케이션 능력 및 협업 능력 우수</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Preferred Qualifications */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">우대 사항</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span>프리미엄/럭셔리 브랜드 경험</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span>온라인 쇼핑몰 운영 경험</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span>해외 브랜드/바이어와의 협업 경험</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span>인플루언서 마케팅 및 콘텐츠 기획 경험</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    <span>영어 커뮤니케이션 가능자</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">근무 환경 및 혜택</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>정규직 채용 (수습 3개월)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>4대 보험 적용</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>유연근무제 및 재택근무 가능</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>연차 및 휴가제도</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>컨퍼런스 및 교육 지원</span>
                  </li>
                </ul>
              </div>

              {/* Application */}
              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-semibold mb-4">지원 방법</h3>
                <p className="text-muted-foreground mb-6">
                  이메일로 이력서와 자기소개서를 보내주세요.
                  <br />
                  서류 전형 후 면접을 진행합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="w-full sm:w-auto">
                    <a href="mailto:careers@atelier.com">지원하기</a>
                  </Button>
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a href="mailto:careers@atelier.com">문의하기</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                지원서 검토 후 적합한 분께 개별적으로 연락드리겠습니다.
                <br />
                문의사항이 있으시면 언제든지 연락주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
