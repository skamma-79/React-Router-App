import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
});

export default function Header() {
    return (
        <header>
            <h2>EduLearn</h2>

            <nav>
                {/* NavLink pages ke beech navigate karta hai aur active page ko pehchanta hai */}
                <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
                <NavLink to="/about" style={navLinkStyle}>About</NavLink>
                <NavLink to="/courses" style={navLinkStyle}>Courses</NavLink>
                <NavLink to="/instructors" style={navLinkStyle}>Instructors</NavLink>
            </nav>
        </header>
    )
}