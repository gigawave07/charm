import { NextFunction, Request, Response } from "express";
import { CharacterModel } from "./schema";
import { validate } from "class-validator";
import logger from "jet-logger";
import { Character } from "./models";
import { StatusCodes } from "http-status-codes";

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

export const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const character = Character.fromObject(req.body as Character);
    const errors = await validate(character);
    if (errors.length > 0) {
      logger.err(errors);
      res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json(`Create character fail. Reason: ${errors.toString()}`);
    } else {
      const result = await CharacterModel.create(character);
      res.json(result);
    }
  } catch (e: any) {
    next(e);
  }
};
