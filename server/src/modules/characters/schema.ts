import mongoose, { Schema } from "mongoose";
import { Character } from "./models";
import { isEmpty } from "lodash";
import {
  xtinaImg,
  mahoImg,
  kokkoroImg,
  hatsuneImg,
  yuiImg,
  kyaruImg,
} from "./data";

const defaultCharacters = [
  new Character("Maho", "Pew pew", mahoImg),
  new Character("Kokkoro", "push push", kokkoroImg),
  new Character("Christina (Xmas)", "slash", xtinaImg),
  new Character("Hatsune", "pewww brrr", hatsuneImg),
  new Character("Yui", "slurp slurp", yuiImg),
  new Character("Kyaru", "reeee reeee", kyaruImg),
];

const characterSchema = new Schema<Character>({
  name: String,
  skill: String,
  img: String,
});
export const CharacterModel = mongoose.model("Characters", characterSchema);

export const setupCharacterDB = async () => {
  const defaultDocs = await CharacterModel.find({
    name: {
      $in: ["Maho", "Kokkoro", "ChristmasChristina", "Hatsune", "Yui", "Kyaru"],
    },
  });
  if (isEmpty(defaultDocs)) {
    CharacterModel.insertMany(defaultCharacters, (err) => {
      if (err) return;
    });
  }
};
