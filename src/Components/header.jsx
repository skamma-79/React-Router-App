import { Link } from "react-router-dom";
{/* React Router mein page navigation hoti hai */}

export default function Header() {
    return (
        <header>
            <h2>EduLearn</h2>

            <nav>
                {/* Link pages ke beech navigate karta hai */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/instructors">Instructors</Link>
            </nav>
        </header>
    )
}