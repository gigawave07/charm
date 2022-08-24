import express from "express";
import { getAllCharacters } from "./controller";

const charactersRoutes = express.Router();

charactersRoutes.post("/getAllCharacters", getAllCharacters);

export default charactersRoutes;
