import { useParams } from "react-router-dom";
import { recipes } from "../data/detailRecipes";
import "./recipeStyle.css";

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) return <p>Receptet hittades inte.</p>;

  return (
    <div className="recipe-container">
      <h1>{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} />
      <p><strong>Beskrivning:</strong> {recipe.description}</p>
      <p><strong>Ingredienser:</strong> {recipe.ingredients}</p>
      <p><strong>Gör så här:</strong> {recipe.howto}</p>
    </div>
  );
};

export default RecipeDetailPage;
