import { useState } from "react";
import "./Project.css";

const Project = ({
  title,
  period,
  projectType,
  techStack,
  summary,
  features,
  contribution,
  api,
  // learnings,
  // challenges,
  serviceStatus,
  images,
  demoLink,
  detailsLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 이미지로 이동
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 이전 이미지로 이동
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Project">
      <h2>&lt;Projects /&gt;</h2>
      <div className="projectWrapper">
        {/* 좌측 이미지 슬라이더 */}
        <div className="projectLeft">
          <button className="arrow arrowLeft" onClick={prevImage}>
            ❮
          </button>
          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="projectImage"
          />
          <button className="arrow arrowRight" onClick={nextImage}>
            ❯
          </button>

          {/* 페이지네이션 (이미지 개수 표시) */}
          <div className="pagination">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>

          <div className="projectButtons">
            {demoLink && (
              <a href={demoLink} target="_blank" className="btn btnBlue">
                사이트 바로가기
              </a>
            )}
            {detailsLink && (
              <a href={detailsLink} target="_blank" className="btn btnRed">
                GitHub README
              </a>
            )}
          </div>
        </div>

        {/* 우측 프로젝트 정보 */}
        <div className="projectRight">
          <div className="projectHeader">
            <h1 className="projectTitle">{title}</h1>
            <span className="projectMeta">
              {projectType} · {serviceStatus}
            </span>
          </div>

          <div className="projectInfo">
            <div className="infoRow">
              <span className="label">개발 기간</span>
              <span className="value">{period}</span>
            </div>

            <div className="infoRow">
              <span className="label">서비스 소개</span>
              <span className="value">{summary}</span>
            </div>

            <div className="infoRow">
              <span className="label">기술 스택</span>
              <span className="value">{techStack}</span>
            </div>

            {api && (
              <div className="infoRow">
                <span className="label">사용 API</span>
                <span className="value">{api}</span>
              </div>
            )}

            <div className="infoRow">
              <span className="label">수행 역할</span>
              <span className="value">{contribution}</span>
            </div>
          </div>

          <div className="projectContent">
            <section className="contentSection">
              <h3>주요 기능</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* <section className="contentSection">
              <h3>배운 점</h3>
              <ul>
                {learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </section>

            <section className="contentSection">
              <h3>힘들었던 점</h3>
              <ul>
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
