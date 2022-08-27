import mongoose, { Schema } from "mongoose";
import { isEmpty } from "lodash";

const createCharacter = (name: string, skill: string, img: string) => {
  return { name, skill, img };
};

const defaultCharacters = [
  createCharacter("Maho", "Pew pew", "Maho.jpg"),
  createCharacter("Kokkoro", "push push", "Kokkoro.jpg"),
  createCharacter("Christina (Xmas)", "slash", "ChristmasChristina.png"),
  createCharacter("Hatsune", "pewww brrr", "Hatsune.jpg"),
  createCharacter("Yui", "slurp slurp", "Yui.jpg"),
  createCharacter("Kyaru", "reeee reeee", "Kyaru.png"),
];

const characterSchema = new Schema({
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
