import { useState } from "react";
import "./Project.css";

const Project = ({
  title,
  period,
  projectType,
  frontend,
  deployment,
  api,
  backend,
  summary,
  features,
  contribution,
  serviceStatus,
  images,
  demoLink,
  architectureImage,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 이미지로 이동
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 이전 이미지로 이동
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const tabs = ["기본 정보", "주요 기능", "아키텍처"];

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

          <nav className="tabNavigation">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tabButton ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="tabContent">
            {/* Tab 1: 기본 정보 */}
            {activeTab === 0 && (
              <div className="projectInfo">
                <div className="infoRow">
                  <span className="label">개발 기간</span>
                  <span className="value">{period}</span>
                </div>

                <div className="infoRow">
                  <span className="label">서비스 소개</span>
                  <span className="value">{summary}</span>
                </div>

                {frontend && (
                  <div className="infoRow">
                    <span className="label">Frontend</span>
                    <span className="value">{frontend}</span>
                  </div>
                )}

                {deployment && (
                  <div className="infoRow">
                    <span className="label">Deployment</span>
                    <span className="value">{deployment}</span>
                  </div>
                )}

                {(api || backend) && (
                  <div className="infoRow">
                    <span className="label">API & Backend</span>
                    <span className="value">
                      {[api, backend].filter(Boolean).join(", ")}
                    </span>
                  </div>
                )}

                <div className="infoRow">
                  <span className="label">수행 역할</span>
                  <ul className="valueList">
                    {Array.isArray(contribution) ? (
                      contribution.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{contribution}</li>
                    )}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 2: 주요 기능 */}
            {activeTab === 1 && (
              <div className="projectContent">
                <ul className="featureList">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <span className="featureText">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 3: 아키텍처 */}
            {activeTab === 2 && (
              <div className="projectContent architectureTab">
                {architectureImage ? (
                  <div className="architectureWrapper">
                    <img
                      src={architectureImage}
                      alt={`${title} Architecture`}
                      className="architectureImage"
                    />
                  </div>
                ) : (
                  <div className="emptyArchitecture">
                    <p>아키텍처 설계 이미지를 준비 중입니다.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
