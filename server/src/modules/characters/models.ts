import { IsNotEmpty } from "class-validator";

export class Character {
  @IsNotEmpty()
  name: string;
  skill: string;
  img: string;


  constructor(name: string, skill: string, img: string) {
    this.name = name;
    this.skill = skill;
    this.img = img;
  }

  static fromObject({ name, skill, img }: Character) {
    return new Character(name, skill, img)
  }
}
