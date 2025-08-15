import { useState } from "react";
import { Recipe } from "../models/Recipe";

export const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    new Recipe("Bolognese", 123, "./src/assets/carbonara.jpg"),
  ]);
  return (
    <div>
      <div className="hero">
        <img className="heroImg" src="./src/assets/Hero.png" alt="bild på två pastarätter och två glas vin som står på ett bord med utsikt över vattnet"/>
      </div>

      <div className="recipe-Wrapper">
        {recipes.map((r) => (
          <div>
            <a href={`recipe/${r.id}`}>
              <img src={r.img} alt="" />
            </a>
          </div>
        ))}
        <div>
          <img src="" alt="" />
          <h2>Recipe #1</h2>
        </div>
      </div>
    </div>
  );
};
