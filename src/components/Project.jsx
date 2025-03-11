import { useState } from "react";
import "./Project.css";

const Project = ({
  title,
  period,
  techStack,
  summary,
  features,
  learnings,
  challenges,
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
                상세 정보
              </a>
            )}
          </div>
        </div>

        {/* 우측 프로젝트 정보 */}
        <div className="projectRight">
          <h1>{title}</h1>
          <p>
            <strong>개발 기간 :</strong> {period}
          </p>
          <p>
            <strong>사용 기술 :</strong> {techStack}
          </p>
          <p>
            <strong>개발 개요 :</strong> {summary}
          </p>

          <p>
            <strong>주요 기능</strong>
          </p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p>
            <strong>배운 점</strong>
          </p>
          <ul>
            {learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>

          <p>
            <strong>힘들었던 점</strong>
          </p>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
