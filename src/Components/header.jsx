import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h2>EduLearn</h2>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/instructors">Instructors</Link>
            </nav>
        </header>
    )
}