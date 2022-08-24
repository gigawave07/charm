import { NextFunction, Request, Response } from "express";

export const getAllCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json([
      "Maho.jpg",
      "Kokkoro.jpg",
      "ChristmasChristina.png",
      "Hatsune.jpg",
      "Yui.jpg",
      "Kyaru.png",
    ]);
  } catch (e: any) {
    next(e);
  }
};
