import "./Profile.css";
import ProjectList from "./ProjectList";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="futureVision">
        <p className="profileIntro">
          <strong>
            “구조적 설계와 원활한 소통을 통해 팀의 개발 효율을 높이는 프론트엔드
            개발자입니다.”
          </strong>
          <br />
          <br />
          React와 Typescript를 기반으로 컴포넌트 책임과 상태 구조를 명확히
          나누는 설계를 지향합니다.
          <br />
          기획 의도와 변경 사항을 정리해 공유하는 개발 방식을 선호하며, 협업과
          유지보수를 함께 고려합니다.
          <br />
          <br />
          협업과 커뮤니케이션을 중요시하며, 이를 바탕으로 보다 나은 서비스
          개발에 기여하고 싶습니다.
          <br />
          앞으로 기술적 성장과 원활한 소통을 통해 팀과 함께 발전하는 개발자가
          되겠습니다.
        </p>
        {/* <div className="profileImg">
          <img src="/my-notion-face-portrait.png" alt="profile" />
        </div> */}
      </div>

      <div className="profileWrapper">
        <div className="profileLeft">
          <div className="profileInfo">
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
            <p>
              <strong>Github : </strong>{" "}
              <a
                href="https://github.com/HeoYedim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heo Yerim Github
              </a>
            </p>
            <p>
              <strong>Email :</strong> yeding0618@gmail.com
            </p>
          </div>
          <div className="profileSkills">
            <h2>&lt;Skills /&gt;</h2>
            <p>
              <strong>Languages :</strong> Html/Css/JavaScript, TypeScript,
              tailwindcss, Python
            </p>
            <p>
              <strong>Frameworks & Libraries :</strong> React, Mui, Shadcn
            </p>
            <p>
              <strong>Development & Version Control :</strong> Rest API, Vercel,
              Supabase, Github
            </p>
            <p>
              <strong>Design & Collaboration :</strong> Figma, Notion, Jira,
              Confluence
            </p>
            {/* <p>
              <strong>Architecture :</strong> Rest API
            </p> */}
          </div>
        </div>

        <div className="profileRight">
          <h3>&lt;More About Me! /&gt;</h3>
          <p>
            <strong>자격증</strong>
            <ul>
              <li>SQLD (2024.12)</li>
              <li>정보처리기사 (2025.12)</li>
            </ul>
          </p>
          <strong>ICT융합학부 스마트콘텐츠 전공</strong>
          <ul>
            <li>기본적인 컴퓨터 이론</li>
            <li>자료구조 및 알고리즘</li>
            <li>웹 및 AI를 이용한 iOS/Android 앱 개발</li>
          </ul>
          <p>
            <strong>관심 기술</strong>
            <ul>
              <li>UI/UX</li>
              <li>Next.js</li>
            </ul>
          </p>
          <p>
            <strong>기타 개발 활동</strong>
          </p>
          <ul>
            <li>
              Swagger로 정의된 <strong>REST API</strong>를 기반으로 백엔드와
              협업하여 프론트엔드 연동을 진행 중
            </li>
            <li>
              원주시 공공데이터 활용 아이디어 공모전 1차 통과 (50여 팀 중 18팀에
              속함){" "}
            </li>
          </ul>
        </div>
      </div>

      <ProjectList />
      <div className="bottomRights">
        © 2025 Heo Yeorim. All rights reserved.
      </div>
    </div>
  );
};

export default Profile;
