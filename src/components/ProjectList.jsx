import Project from "./Project";

const projects = [
  {
    title: "My Review Log",
    period: "2024.12 - 2025.02",
    techStack: "JavaScript, React, Vercel",
    summary: "나만의 영화 및 도서 리뷰 아카이브",
    features: [
      "영화 및 도서 리뷰 등록",
      "최신순 & 별점순, 영화 & 도서 필터링",
      "영화 포스터, 도서 표지 자동 등록",
    ],
    learnings: ["TMDB, Google Books API 추가", "Vercel 배포"],
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
    period: "2025.02 - 2025.02",
    techStack: "JavaScript, React, Vercel",
    summary: "개인 포트폴리오 웹사이트",
    features: ["프로젝트 목록 관리"],
    learnings: [
      "Github Pages로 배포 후 경로 문제로 인한 재배포 오류 지속적으로 발생. 이를 해결하기 위해 보다 적합한 배포 방식인 Vercel로 진행. 정적 사이트 배포 환경에 대해 알게 됨",
    ],
    challenges: ["디자인 구현"],
    images: [
      "/portfolio_cover.png",
      "/portfolio_info.png",
      "/portfolio_project.png",
    ],
    demoLink: "https://yerim-portfolio.vercel.app/",
    detailsLink: "https://github.com/HeoYedim/yerim-portfolio",
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
