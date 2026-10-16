// BrowserRouter: app ko router bana deta hai
//Routes: multiple pages ko define karne ke liye
//Route: har ek page ke liye URL aur component set karta hai
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Layout from "./Pages/Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>

        <main>
          {/*URL ke according decide karna ki kaunsa page screen par dikhana hai.*/}
          <Routes> {/*saare routes ko group karta hai*/}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> {/*kisi particular URL ko ek component se connect karta hai like Home ko.*/}
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/instructors" element={<Instructors />} />
            </Route>
          </Routes>
        </main>

      </BrowserRouter>
    </>
  );
}