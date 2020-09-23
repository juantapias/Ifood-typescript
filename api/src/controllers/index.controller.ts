import { Request, Response } from 'express';

export function WelcomeApi (req: Request, res: Response): Response {
  return res.json("Welcome to api");
}