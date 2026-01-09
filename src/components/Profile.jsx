import "./Profile.css";
import ProjectList from "./ProjectList";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="profileCard_white">
        <div className="futureVision">
          <p className="profileIntro">
            <strong>
              👋 “안녕하세요 신입 프론트엔드 개발자 허예림입니다.”
            </strong>
            <br />
            React와 Typescript를 기반으로 컴포넌트 책임과 상태 구조를 명확히
            나누는 설계를 지향합니다.
            <br />
            기획 의도와 변경 사항을 정리해 공유하는 개발 방식을 선호하며, 협업과
            유지보수를 함께 고려합니다.
            <br />
            협업과 커뮤니케이션을 중요시하며, 이를 바탕으로 보다 나은 서비스
            개발에 기여하고 싶습니다.
            <br />
            🔥 앞으로 구조적 설계와 원활한 소통을 통해 팀의 개발 효율을 높이는
            프론트엔드 개발자가 되겠습니다. 🔥
          </p>
        </div>
        <div className="profileInfo">
          <div className="profileInfoLeft">
            <p>
              <strong>Name :</strong> 허예림
            </p>
            <p>
              <strong>Birth Year :</strong> 2001
            </p>
            <p>
              <strong>University :</strong> 평택대학교 (2020.03 - 2025.02)
            </p>
            <p>
              <strong>Major :</strong> ICT융합학부 스마트콘텐츠 전공
            </p>
            <p>
              <strong>GPA :</strong> 4.08 / 4.5
            </p>
          </div>
          <div className="profileInfoRight">
            <p>
              <strong>GitHub : </strong>{" "}
              <a
                href="https://github.com/HeoYedim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heo Yerim GitHub
              </a>
            </p>
            <p>
              <strong>Email :</strong> yeding0618@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="profileWrapper">
        <div className="profileCard_muteyellow">
          <div className="profileLeft">
            <div className="profileSkills">
              <h2>&lt;Skills /&gt;</h2>
              <div className="skillItem">
                <div className="skillHeader">
                  <strong>Languages</strong>
                  <div className="skillIcons">
                    <img src="/HTML.svg" alt="HTML" />
                    <img src="/CSS.svg" alt="CSS" />
                    <img src="/JavaScript.svg" alt="JS" />
                    <img src="/TypeScript.svg" alt="TS" />
                    <img src="/TailwindCSS-Dark.svg" alt="TailwindCSS" />
                    <img src="/Python-Light.svg" alt="Python" />
                  </div>
                </div>
                <p>HTML/CSS/JavaScript, TypeScript, Tailwind CSS, Python</p>
              </div>

              <div className="skillItem">
                <div className="skillHeader">
                  <strong>Frameworks & Libraries</strong>
                  <div className="skillIcons">
                    <img src="/React.svg" alt="React" />
                    <img src="/MaterialUI-Dark.svg" alt="MUI" />
                  </div>
                </div>
                <p>React, MUI, Shadcn</p>
              </div>

              <div className="skillItem">
                <div className="skillHeader">
                  <strong>Deployment & Backend Services</strong>
                  <div className="skillIcons">
                    <img src="/Vercel-Light.svg" alt="Vercel" />
                    <img src="/Supabase-Dark.svg" alt="Supabase" />
                    <img src="/Github-Dark.svg" alt="GitHub" />
                  </div>
                </div>
                <p>REST API, Vercel, Supabase, GitHub</p>
              </div>

              <div className="skillItem">
                <div className="skillHeader">
                  <strong>Design & Collaboration</strong>
                  <div className="skillIcons">
                    <img src="/Figma.svg" alt="Figma" />
                    <div className="iconWrapper">
                      <img src="/Jira.svg" alt="Jira" />
                    </div>
                    <div className="iconWrapper">
                      <img src="/Confluence.svg" alt="Confluence" />
                    </div>
                  </div>
                </div>
                <p>Figma, Notion, Jira, Confluence</p>
              </div>
            </div>
            <div className="profileCertificate">
              <h2>&lt;Certificate /&gt;</h2>
              <p>
                <strong>SQLD (2024.12)</strong>{" "}
              </p>
              <p>
                <strong>정보처리기사 (2025.12)</strong>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="profileCard_muteyellow">
          <div className="profileRight">
            <h2>&lt;More About Me! /&gt;</h2>
            <div className="profileSection">
              <strong>ICT융합학부 스마트콘텐츠 전공</strong>
              <ul>
                <li>기본적인 컴퓨터 이론</li>
                <li>자료구조 및 알고리즘</li>
                <li>웹 및 AI를 이용한 iOS/Android 앱 개발</li>
              </ul>
            </div>

            <div className="profileSection">
              <p>
                <strong>관심 기술</strong>
              </p>
              <ul>
                <li>UI/UX</li>
                <li>Next.js</li>
              </ul>
            </div>

            <div className="profileSection">
              <h3>
                <strong>기타 개발 활동</strong>
              </h3>
              <ul>
                <li>
                  Swagger로 정의된 <strong>REST API</strong>를 기반으로 백엔드와
                  협업하여 프론트엔드 연동을 진행 중
                </li>
                <li>
                  원주시 공공데이터 활용 아이디어 공모전 1차 통과 (50여 팀 중
                  18팀에 속함){" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="projectSection">
        <ProjectList />
      </div>
      <div className="bottomRights">
        © 2025 Heo Yeorim. All rights reserved.
      </div>
    </div>
  );
};

export default Profile;
