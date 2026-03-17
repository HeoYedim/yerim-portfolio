import Project from "./Project";

const projects = [
  {
    title: "Dashmo",
    projectType: "팀 (3명)",
    serviceStatus: "서비스 운영 중",
    period: "2025.11 - 2026.02",
    frontend: "TypeScript, React, Vite",
    deployment: "Cloudflare",
    backend: "REST API",
    summary: "위젯 기반 대시보드",
    features: [
      "게스트 모드 / 로그인 사용자 모드",
      "사용자별 대시보드 생성 및 관리 기능",
      "9가지 위젯 추가 및 삭제, 이동",
      "사용자 정보 수정",
      "다크 / 라이트 모드 지원",
    ],
    contribution: [
      "기획, 프론트 개발 전반 담당",
      "서비스 UI/UX 기획 및 화면 흐름 설계",
      "JWT+httpOnlyCookie 기반 프론트엔드 인증 흐름 구현",
      "REST API 연동 및 대시보드/위젯 CRUD 기능 개발",
      "백엔드와 API 스펙 협의 및 연동 조율",
    ],
    images: ["/dashmo_1.png", "/dashmo_2.png", "dashmo_3.png", "/dashmo_4.png"],
    demoLink: "https://dashmo.space/",
    // detailsLink: "",
    architectureImage: "public/dashmo-archi.png",
  },
  {
    projectType: "개인",
    serviceStatus: "서비스 운영 중",
    title: "My Review Log",
    period: "2024.12 - 2025.02",
    frontend: "JavaScript, React",
    deployment: "Vercel",
    summary:
      "TMDB & Google Books API를 활용한 나만의 영화, 도서 리뷰 아카이브 웹 서비스",
    features: [
      "영화 및 도서 리뷰 등록/수정/삭제 (CRUD)",
      "최신순 & 별점순, 영화 & 도서 카테고리 필터링",
      "영화 포스터, 도서 표지 자동 등록",
    ],
    contribution: [
      "기획, 설계, 개발 전반 담당",
      "리뷰 아카이브 서비스 기획 및 화면 흐름 설계",
      "도서/영화 API를 활용한 검색 및 리뷰 작성 기능",
    ],
    api: "TMDB API, Google Books API",
    images: [
      "/MRL_main.png",
      "/MRL_new.png",
      "/MRL_review.png",
      "/MRL_edit.png",
    ],
    demoLink: "https://my-review-log.vercel.app/",
    // detailsLink: "https://github.com/HeoYedim/MyReviewLog",
    architectureImage: "/myreviewlog-archi.png",
  },
  {
    title: "이거 한 번 잡숴봐",
    projectType: "팀 (5명)",
    serviceStatus: "서비스 종료",
    period: "2023.08 - 2023.08",
    frontend: "JavaScript",
    summary:
      "계절, 날씨, 시간, 사용자의 기분과 알레르기 유무에 맞춰 GPT가 메뉴를 추천하는 반응형 웹 서비스",
    features: [
      "GPT API를 통해 사용자에게 메뉴 추천",
      "오늘의 랭킹",
      "추천된 메뉴 SNS 공유",
    ],
    contribution: "기획, UI/UX 전반 담당",
    api: "GPT 3.5 API",
    images: [
      "/foodDrop.png",
      "/foodDrop_season.png",
      "foodDrop_weather.png",
      "foodDrop_time.png",
      "foodDrop_mood.png",
      "foodDrop_allergy.png",
      "foodDrop_loading.png",
      "foodDrop_select.png",
      "foodDrop_recommend.png",
    ],
    demoLink: "",
    // detailsLink: "",
  },
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
