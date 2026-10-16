import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate(); {/*home page pe navigate */}

  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about EduLearn.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default About;