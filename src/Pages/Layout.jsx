import {Outlet} from "react-router-dom"; 
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function Layout() {
    return(
        <>
          {/* Use Fragment */}
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    )
}