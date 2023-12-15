import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="/deniz.png" alt="tame" />;
}

function Intro() {
  return (
    <div>
      <h1>Deniz Misirli</h1>
      <p>
        Hey! I'm a React developer with various skillsets. I'm highly
        enthusiastic with sports and niche hobbies. Standing out with my designs
        and my vision apart from achieving hard missions are what make me happy
        in the life.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#f7f5" />
      <Skill skill="HTML/CSS" emoji="🎨" color="orange" />
      <Skill skill="Javascript" emoji="💻" color="yellow" />
      <Skill skill="Photoshop" emoji="📷" color="blue" />
      <Skill skill="Extreme Sports" emoji="🏂" color="red" />
      <Skill skill="Coffee" emoji="☕" color="brown" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
