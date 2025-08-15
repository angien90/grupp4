export class Recipe {
  id: number;
  img: string;
  name: string;
  description: string;
  ingredients: string;
  howto: string;

  constructor(id: number, img: string, name: string, description: string, ingredients: string, howto: string) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.howto = howto;
  }
}
