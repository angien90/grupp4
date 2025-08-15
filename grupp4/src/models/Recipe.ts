export class Recipe {
  name: string;
  id: number;
  img: string;

  constructor(name: string, id: number, img: string) {
    this.id = id;
    this.name = name;
    this.img = img;
  }
}
