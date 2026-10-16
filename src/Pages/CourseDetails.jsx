import { useParams, Link } from "react-router-dom";

export default function CourseDetails() {
  const { courseId } = useParams();

  const courses = {
    101: "React",
    202: "Node.js",
  };

  return (
    <div>
      <h1>Course Details</h1>
      <h2>{courses[courseId] || "Course Not Found"}</h2>
      <p>Course ID: {courseId}</p>
      <Link to="/courses">Back to Courses</Link>
    </div>
  );
}