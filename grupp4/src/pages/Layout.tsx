import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ImageCarousel from "../components/Carousel";

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
