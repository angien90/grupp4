import grandma from "../assets/grandma-icon.png";

export const Header = () => {
  return (
    <>
      <header className="header">
      <img className="logo" src={grandma} alt="Bild på en gammal dam som håller i en italiensk flagga" />
      <h1 className="h1">Al Dente</h1>
      </header>
    </>
  );
};
