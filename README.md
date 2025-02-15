
## 🏃프로젝트 소개

![thumbnail](https://github.com/user-attachments/assets/1b8cae3a-a5a0-4ae5-b2a1-a6cfbd2461c1)

### 프론트엔드 개발자 차재식의 프로필 페이지입니다

> **주석이 필요없는 코드**를 작성하기 위해 노력하고 있습니다❗️

&nbsp;

## 🔧 기술 스택

<div align="center">

|       Type       |                                                                                                           Tool                                                                                                           |
| :--------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     Library      |   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)   |
|     Language     |                                                 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)                                                 |
|     Styling      |                                               ![Styled-components](https://img.shields.io/badge/styledcomponents-%2338B2AC.svg?style=for-the-badge&logo=styled-components-css&logoColor=white)                                               |
|    Formatting    | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black) |
| Package Manager  |                                                           ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)                                                            |
| Version Control  |     ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)     |


</div>

&nbsp;

## 🍀 우리의 컨벤션

### 폴더 구조

```bash
📋 src
    ├─📁 assets          # 폴더명: PascalCase
    ├─📁 components      # 파일명: index.tsx
    │  ├─📂 common
    │  ├─📂 Header
    │  ├─📂 home
    |    ├─📂 Home
    │  ├─📂 modal
    |    ├─📂 MainModal
    │  ├─📂 NotFound
    │  ├─📂 Project
    ├─📁 constants
    ├─📁 layout
    ├─📁 mocks
    ├─📁 pages
    |  ├─📂 HomePage
    |  ├─📂 NotFoundPage
    |  ├─📂 ProjectPage
    |  ├─📂 StudyPage
    ├─📁 routes
    ├─📁 styles
    ├─📁 types
    └─📁 utils
```

### 코드 스타일

```js
// 함수
const ComponentName = () => { ... }

// 변수
const userInput = '...'    // camelCase
const API_KEY = '...'      // UPPER_SNAKE_CASE
```

### 커밋 컨벤션

```bash
design: HTML/CSS 마크업 진행
feat: 새로운 기능 추가
style: css 수정 및 코드의 의미에 영향을 미치지 않는 변경사항
fix: 버그 수정
refactor: 리팩토링, 기능 변화 없이 코드 구조 개선
chore: 코드 수정 외 잡다한 작업 (빌드 과정이나 설정 변경 등)
docs: 문서 변경
test: 테스트 코드 추가 또는 수정
revert: 이전 커밋을 되돌림
```

### 브랜치 전략

```bash
main (배포용)
  │
  └── develop (개발용 main)
        │
        ├── feat/video-fetch-15    # 기능별 브랜치
        ├── feat/user-auth-22
        └── feat/api-integration-39
```

- **main**: 배포 준비가 완료된 코드만 관리
- **develop**: 개발 중인 코드의 중심 브랜치
- **feat/\***: 기능별 독립 개발 환경
  - 네이밍: feat/기능-세부기능-이슈번호
  - 예시: feat/video-fetch-15

### 품질 관리

- **ESLint**: 정적 코드 분석을 통해 잠재적 문제를 감지하고 일관된 코드 품질을 보장합니다.
- **Prettier**: 개발자가 작성한 코드를 자동으로 포맷팅하여 프로젝트 전반에 걸쳐 일관된 코드 스타일을 유지합니다.
- **Commitlint**: 커밋 메시지가 정해진 규칙을 따르도록 검사하여 명확하고 일관된 커밋 히스토리를 관리합니다.
- **Husky**: Git Hooks를 통해 커밋 전 린트 검사, 푸시 전 테스트 실행 등 자동화된 품질 검사를 수행합니다.

&nbsp;

## 📆 프로젝트 진행 과정

### 기획 (2024.02.08 ~ 2024.02.07)

프로필 페이지를 어떻게 구성할 것인가와 어떤 내용을 작성할 것인가에 대해 고민해보는 시간을 가졌습니다.

### 개발 및 퍼블리싱 (2025.02.07 ~ 2025.02.14)

재사용 가능한 UI 컴포넌트들을 직접 설계하고 개발한 후, 세부 기능 및 페이지를 단계적으로 구현했습니다.

### 리팩토링 (2025.02.14 ~ 2025.02.15)

코드 품질 향상을 위한 리팩토링을 진행했고, 컴포넌트 분리 및 발견된 버그를 수정했습니다.

&nbsp;

## 🚀 홈페이지 소개
### 메인 페이지

- 이력과 인생에서 추구하고자 하는 방향성을 소개합니다

### 프로젝트 페이지

- 진행한 프로젝트와 사용한 스택을 확인할 수 있습니다
- 클릭 시 해당 레포로 이동합니다

### 스터디 페이지
- 프론트엔드 개발자가 되기 위해 공부한 내용들을 확인할 수 있습니다
- 과정중에 작성한 내용을 깃허브 또는 블로그에서 확인할 수 있습니다. 
