import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h2>EduLearn</h2>

            <nav>
                {/* NavLink pages ke beech navigate karta hai aur active page ko pehchanta hai */}
                <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> {/*current page ka link active hai ya nahi. hai toh active class nhi toh "" */}
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink>
                <NavLink to="/instructors" className={({ isActive }) => isActive ? "active" : ""}>Instructors</NavLink>
            </nav>
        </header>
    )
}