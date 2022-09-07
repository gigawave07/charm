import express from "express";
import {
  createCharacter,
  deleteAllCharacters,
  getAllCharacters,
} from "./controller";

const charactersRoutes = express.Router();

charactersRoutes.post("/getAllCharacters", getAllCharacters);
charactersRoutes.post("/deleteAllCharacters", deleteAllCharacters);
charactersRoutes.post("/createCharacter", createCharacter);

export default charactersRoutes;
