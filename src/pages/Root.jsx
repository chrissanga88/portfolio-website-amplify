import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    // The Outlet component acts as a marker where the child routes on App.jsx should be rendered
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;