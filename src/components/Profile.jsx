import "./Profile.css";
import ProjectList from "./ProjectList";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="futureVision">
        <p className="profileIntro">
          <strong>“미래를 기획하고 현재를 개발하는 프론트엔드 개발자”</strong>
          <br />
          <br />
          기획과 UI/UX에 흥미가 있어 다양한 사이트를 분석하는 것을 좋아합니다.
          <br />
          아이디어를 기록하고 정리하여 필요할 때 적절히 활용하는 것이 저의
          강점입니다.
          <br />
          <br />
          협업과 커뮤니케이션을 중요시하며, 이를 바탕으로 보다 나은 서비스
          개발에 기여하고 싶습니다.
          <br />
          앞으로 기술적 성장과 원활한 소통을 통해 팀과 함께 발전하는 개발자가
          되겠습니다.
        </p>
        <div className="profileImg">
          <img src="/my-notion-face-portrait.png" alt="profile" />
        </div>
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
              <strong>Languages :</strong> HTML/CSS/JavaScript, TypeScript,
              Python
            </p>
            <p>
              <strong>Frameworks & Libraries :</strong> React, MUI
            </p>
            <p>
              <strong>Development & Version Control :</strong> Vercel, Supabase,
              Github
            </p>
            <p>
              <strong>Design & Collaboration :</strong> Figma, Notion, Jira,
              Confluence
            </p>
          </div>
        </div>

        <div className="profileRight">
          <h3>&lt;More About Me! /&gt;</h3>
          <p>
            <strong>자격증 :</strong> SQLD (2024.12)
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
            <strong>스터디 그룹</strong>
          </p>
          <ul>
            <li>SNS 웹 프로젝트 진행 중</li>
            <ul>
              <li>백엔드 팀원과 로그인 및 사용자 데이터 연결 ing</li>
              <li>UI 기획 및 와이어프레임 제작</li>
            </ul>
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
