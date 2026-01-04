# 배포 가이드 (Deployment Guide)

이 프로젝트를 무료로 배포하는 방법을 안내합니다.

## 🚀 Vercel을 이용한 배포 (권장)

Vercel은 Next.js를 만든 회사의 플랫폼으로, Next.js 프로젝트 배포에 최적화되어 있습니다.

### 방법 1: Vercel 웹 대시보드 사용

1. **GitHub에 코드 푸시**
   ```bash
   git add .
   git commit -m "프로젝트 초기 설정"
   git push origin main
   ```
   
   > GitHub 저장소가 없다면 먼저 생성하세요:
   > - https://github.com/new 에서 새 저장소 생성
   > - 생성 후 `git remote add origin <your-repo-url>` 명령어로 연결

2. **Vercel 가입**
   - https://vercel.com 접속
   - "Sign Up" 클릭
   - GitHub 계정으로 로그인 (권장)

3. **프로젝트 배포**
   - Vercel 대시보드에서 "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - **Framework Preset**: Next.js (자동 감지됨)
     - **Root Directory**: `./my-awesome-shoppingmall` (또는 프로젝트 루트가 저장소 루트면 그대로)
     - **Build Command**: `npm run build` (자동)
     - **Output Directory**: `.next` (자동)
   - "Deploy" 클릭

4. **배포 완료**
   - 약 1-2분 후 배포 완료
   - 자동으로 `https://your-project-name.vercel.app` URL 제공
   - 이후 GitHub에 푸시할 때마다 자동 재배포됩니다!

### 방법 2: Vercel CLI 사용

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **배포**
   ```bash
   cd my-awesome-shoppingmall
   vercel
   ```
   
3. **처음 배포 시**
   - 브라우저가 열리면 Vercel 계정으로 로그인
   - 프로젝트 설정 확인 후 배포 진행

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

## 🌐 Netlify를 이용한 배포

1. **GitHub에 코드 푸시** (위와 동일)

2. **Netlify 가입**
   - https://www.netlify.com 접속
   - GitHub 계정으로 로그인

3. **프로젝트 배포**
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - 빌드 설정:
     - **Build command**: `cd my-awesome-shoppingmall && npm run build`
     - **Publish directory**: `my-awesome-shoppingmall/.next`
   - "Deploy site" 클릭

## ☁️ Cloudflare Pages를 이용한 배포

1. **GitHub에 코드 푸시**

2. **Cloudflare Pages 설정**
   - https://pages.cloudflare.com 접속
   - GitHub 저장소 연결
   - 빌드 설정:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `.next`

## 📝 배포 전 체크리스트

- [ ] `package.json`에 모든 의존성이 포함되어 있는지 확인
- [ ] 환경 변수가 필요한 경우 `.env.example` 파일 생성
- [ ] 빌드 테스트: `npm run build` 실행하여 에러 없는지 확인
- [ ] Git에 커밋 및 푸시 완료

## 🔧 환경 변수 설정 (필요한 경우)

Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Environment Variables
3. 변수 추가 후 재배포

## 🆓 무료 티어 제한사항

### Vercel
- ✅ 무제한 프로젝트
- ✅ 100GB 대역폭/월
- ✅ 자동 HTTPS
- ✅ 커스텀 도메인 (무제한)
- ✅ 서버리스 함수 포함

### Netlify
- ✅ 100GB 대역폭/월
- ✅ 300분 빌드 시간/월
- ✅ 커스텀 도메인

## 💡 팁

- Vercel은 Next.js와 가장 잘 맞아 기본 설정만으로 배포 가능
- GitHub에 푸시하면 자동으로 재배포됨 (CI/CD)
- 각 브랜치마다 프리뷰 URL 제공
- 프로덕션과 프리뷰 환경 분리 가능

