import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ImageCarousel from "../components/Carousel";

import '../css/header.css';
import '../css/footer.css';

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
        <ImageCarousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
