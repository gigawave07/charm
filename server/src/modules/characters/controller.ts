import { NextFunction, Request, Response } from "express";

const data = [
  "Maho.jpg",
  "Kokkoro.jpg",
  "ChristmasChristina.png",
  "Hatsune.jpg",
  "Yui.jpg",
  "Kyaru.png",
];
export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(data);
  } catch (e: any) {
    next(e);
  }
};

export const deleteAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(data.slice(0, 3));
  } catch (e: any) {
    next(e);
  }
};
