import { useParams } from "react-router-dom";
import { recipes } from "../data/detailRecipes";
import "./recipeStyle.css";

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) return <p>Receptet hittades inte.</p>;

  const ingredients = recipe.ingredients
    .split(/\n/) 
    .map(item => item.trim())
    .filter(item => item.length > 0);

  const steps = recipe.howto
    .split(/(?:\.\s+|\n)/) 
    .map(step => step.trim())
    .filter(step => step.length > 0);

  return (
    <div className="recipe-container">
      <h1>{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} />
      <p><strong>Beskrivning:</strong> {recipe.description}</p>

      <div>
        <strong>Ingredienser:</strong>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Gör så här:</strong>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}.</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
