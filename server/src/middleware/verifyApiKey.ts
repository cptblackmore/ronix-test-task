import type { Request, Response, NextFunction } from "express";

export const verifyApiKey = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const apiKey = req.header("X-Api-Key");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    res.status(401).json({ error: "Invalid or missing API key" });
    return;
  }

  next();
};
