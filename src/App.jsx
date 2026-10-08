import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Footer from "./Components/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      <main>
        <h1>Welcome to EduLearn</h1>
        <p>Learn. Grow. Succeed.</p>
      </main>

      <Footer />
    </BrowserRouter>
    </>
  );
}