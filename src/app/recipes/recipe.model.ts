export class Recipe{
  public name: string;
  public desscription: string;
  public imgpath: string;

  constructor(name: string, description: string, imgpath: string) {
    this.name = name;
    this.desscription = description;
    this.imgpath = imgpath;
  }

}
