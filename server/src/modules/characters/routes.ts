import express from "express";
import { deleteAllCharacters, getAllCharacters } from "./controller";

const charactersRoutes = express.Router();

charactersRoutes.post("/getAllCharacters", getAllCharacters);
charactersRoutes.post("/deleteAllCharacters", deleteAllCharacters);

export default charactersRoutes;
