import Project from "./Project";

const projects = [
  {
    projectType: "개인",
    serviceStatus: "서비스 운영 중",
    title: "My Review Log",
    period: "2024.12 - 2025.02",
    techStack: "JavaScript, React, Vercel",
    summary: "나만의 영화 및 도서 리뷰 아카이브",
    features: [
      "영화 및 도서 리뷰 등록",
      "최신순 & 별점순, 영화 & 도서 필터링",
      "영화 포스터, 도서 표지 자동 등록",
    ],
    learnings: ["TMDB, Google Books API 연결", "Vercel 배포"],
    challenges: ["드롭다운 useEffect 문제"],
    images: [
      "/MRL_main.png",
      "/MRL_new.png",
      "/MRL_review.png",
      "/MRL_edit.png",
    ],
    demoLink: "https://my-review-log.vercel.app/",
    detailsLink: "https://github.com/HeoYedim/MyReviewLog",
  },
  {
    title: "Portfolio",
    projectType: "개인",
    serviceStatus: "서비스 운영 중",
    period: "2025.02 - 2025.02",
    techStack: "JavaScript, React, Vercel",
    summary: "개인 포트폴리오 웹사이트",
    features: ["프로젝트 목록 관리"],
    learnings: [
      "배포 환경에 따른 경로 설정 방식의 차이 이해",
      "프로젝트 특성에 맞는 배포 방식을 선택의 중요성 이해",
    ],
    challenges: ["커버 화면의 타이틀 스크롤 모션 구현"],
    images: ["/portfolio_cover.png"],
    demoLink: "https://yerim-portfolio.vercel.app/",
    detailsLink: "https://github.com/HeoYedim/yerim-portfolio",
  },
  {
    title: "이거 한 번 잡솨봐 with GPT 3.5 API",
    projectType: "팀 (4명)",
    serviceStatus: "서비스 종료",
    period: "2023.08 - 2023.08",
    techStack: "JavaScript",
    summary:
      "계절, 날씨, 시간, 사용자의 기분과 알레르기 유무에 맞춰 메뉴 추천하는 반응형 웹 서비스",
    features: [
      "GPT API를 통해 사용자에게 메뉴 추천",
      "오늘의 랭킹",
      "추천된 메뉴 SNS 공유",
    ],
    learnings: [
      "프로젝트의 전체 기획과 UI/UX를 관리하며 서비스의 전반적인 흐름과 사용자 경험이 어떻게 연결되는지 이해할 수 있었다.",
    ],
    challenges: [
      "UI/UX 완성도를 높이기 위해 디자인 요소와 기능 로직을 함께 고려해야 했던 점에서 어려움을 겪었다.",
    ],
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
    detailsLink: "",
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
