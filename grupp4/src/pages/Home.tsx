import { useState } from "react";
import { Recipe } from "../models/recipe";

export const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    new Recipe("Bolognese", 123, "url"),
  ]);
  return (
    <div>
      <div className="hero">
        <img src="" alt="" />
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
      HOME
    </div>
  );
};
