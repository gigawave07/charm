import { NextFunction, Request, Response } from "express";
import { CharacterModel } from "./schema";

export const getAllCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await CharacterModel.find();
    res.json(data);
  } catch (e: any) {
    next(e);
  }
};

export const deleteAllCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CharacterModel.deleteMany({});
    res.json([]);
  } catch (e: any) {
    next(e);
  }
};
