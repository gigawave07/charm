import mongoose, { Schema } from "mongoose";
import { Character } from "./models";
import { isEmpty } from "lodash";

const defaultCharacters = [
  new Character("Maho", "Pew pew", "Maho.jpg"),
  new Character("Kokkoro", "push push", "Kokkoro.jpg"),
  new Character("Christina (Xmas)", "slash", "ChristmasChristina.png"),
  new Character("Hatsune", "pewww brrr", "Hatsune.jpg"),
  new Character("Yui", "slurp slurp", "Yui.jpg"),
  new Character("Kyaru", "reeee reeee", "Kyaru.png"),
];

const characterSchema = new Schema(Character);
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
