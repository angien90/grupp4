export class Recipe {
  name: string;
  id: number;
  img: string;
  description: string;
  ingredients: string;
  howto: string;

  constructor(name: string, id: number, img: string, howto: string, description: string, ingredients: string) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.description = description;
    this.ingredients = ingredients;
    this.howto = howto;
  }
}
