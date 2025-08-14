import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>En navbar här!</header>
      <main>
        <Outlet />
      </main>
      <footer>Kolla våra socials</footer>
    </>
  );
};
