import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div>
      <h1>Courses Page</h1>
      <p>Explore our courses.</p>

      <ul>
        <li><Link to="/courses/101">React Course</Link></li>
        <li><Link to="/courses/202">Node.js Course</Link></li>
      </ul>
    </div>
  );
}