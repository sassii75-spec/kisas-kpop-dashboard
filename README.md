# 🎤 KISAS x nextLMS 차세대 AI K-Pop 인큐베이팅 대시보드
> **World's 1st AI-based K-Pop Camp Hybrid Platform**
> 전 세계 지망생들을 위한 상시 트레이닝 및 아티스트 케어 시스템 프로토타입입니다.

---

## 📅 기능 상세: 스마트 데뷔 스케줄러 (Smart Scheduling)
참가자가 본인의 빽빽한 캠프 일정을 모바일/웹으로 확인하고, 빈 연습실이나 1:1 세션을 실시간 예약하는 화면입니다.

### ⏱️ 오늘의 일정 (Today's Timeline)
*   **09:00 - 11:00** | 🕺 K-Pop 댄스 타이틀 안무 클래스 (A 스튜디오)
*   **11:00 - 12:30** | 🎤 보컬 개인 레슨 & 발성 교정 (C 룸)
*   **13:30 - 15:00** | 🤖 AI 보이스 스타일 분석 및 음역대 측정
*   **16:00 - 18:00** | 📸 데뷔 프로필 개인 컷 촬영 (스튜디오 B)

---

## 🏛️ 주요 핵심 탭 안내 (Core Features)

### 1. 🕺 나의 훈련 플래너 (Training Planner)
*   **일일 미션 수행**: 오늘의 보컬/댄스 미션을 체크하여 실시간 완료율을 반영하는 대화형 체크리스트.
*   **1:1 세션 매칭 및 공간 예약**: 실시간으로 비어있는 연습 공간(A룸, 보컬 전문 룸 등)의 남은 좌석 현황을 파악하고 예약하는 HUD.

### 2. 🤖 AI 피드백 & VOD (AI Diagnostics)
*   **글로벌 멀티미디어 업로더**: 최대 2GB 초고속 업로드를 지원하는 연습 동영상 제출 드래그 앤 드롭 존.
*   **KISAS AI 분석 리포트**: 골반 각도, 표현력, 발성을 정밀 분석하여 맞춤형 VOD를 자동 매칭.
*   **타임스탬프 드로잉 피드백**: 코치진이 댄스 동영상 특정 프레임에 직접 드로잉하고 성대 상태를 피크 스펙트럼으로 시각화하여 밀착 피드백 제공.

### 3. 👥 캠프 로드맵 & 분반 (Curriculum Roadmap)
*   **Oxford-style Humanities**: 생각의 깊이가 독창적인 예술을 만든다는 옥스퍼드 방식의 인문학 독해 토론 프로그램.
*   **8 Sessions Timeline**: 성찰과 오디션 기획을 융합하는 8개의 주제별 로드맵.
*   **12개 소수정예 분반**: 영어 수준과 음악적 흥미를 분석한 맞춤 분반 및 원어민/이중언어 교사 매칭 매트릭스.
*   **8대 창작 교과과정**: 김형석 프로듀서의 마스터클래스부터 프로덕션 스튜디오 마스터링까지의 교과과정.

### 4. 📄 데뷔 포트폴리오 (Debut Portfolio)
*   **역량 리포트**: 보컬, 댄스, 비주얼, 스타성, 체력을 5각형 레이더 차트로 시각화.
*   **Before & After 비디오 플레이어**: Day 1 입소 영상과 Day 14 수료 영상을 1:1 비교.
*   **블록체인 디지털 수료증**: 기획사 제출용 공식 위변조 방지 인증 포트폴리오 빌드 및 PDF 다운로드 기능.

---

## 🚀 로컬 실행 방법 (Local Development)

```bash
# 1. 패키지 설치
npm install

# 2. 로컬 개발 서버 기동 (Turbopack 초고속 모드)
npm run dev
```
개발 서버가 시작되면 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하실 수 있습니다.

---

## ☁️ Vercel & GitHub 실시간 배포 구성 (CI/CD Deployment)

### 1단계: Local Git 레포지토리 빌드
이미 프로젝트 폴더 내에 `.gitignore` 및 최초 커밋이 로컬에 반영되어 있습니다.

### 2단계: Vercel CLI 로그인 및 배포
사용자 PC에서 아래 명령어를 순서대로 실행해 주세요:
```bash
# Vercel 로그인 (최초 1회 브라우저 연동인증 필요)
npx vercel login

# 프로젝트 배포 시작 (안내에 따라 엔터를 누르면 수초 내 임시 배포 URL이 제공됩니다)
npx vercel
```

### 3단계: GitHub에 코드 올리기
1. [GitHub](https://github.com/new)에서 새로운 빈 레포지토리(`kisas-kpop-dashboard`)를 생성합니다.
2. 아래 명령어로 원격 저장소를 추가하고 코드를 푸시합니다:
```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/kisas-kpop-dashboard.git
git branch -M main
git push -u origin main
```

### 4단계: Vercel Git Integration 연동 (실시간 자동 배포)
1. [Vercel 대시보드](https://vercel.com/new)로 이동합니다.
2. **"Import Git Repository"** 영역에서 GitHub 계정을 연동하고 `kisas-kpop-dashboard`를 선택합니다.
3. **Deploy** 버튼을 누릅니다.
4. **연동 완료!** 이제 터미널에서 코드 수정 후 `git push`를 실행하면 Vercel이 실시간으로 코드를 감지하여 15초 내에 전 세계에 자동 업데이트 배포를 완료합니다.
