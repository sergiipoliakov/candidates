import { NextFunction, Request, Response } from 'express';
import skillService from '../services/skill.service'

export const createSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body
    const result = await skillService.createSkill(name)
    return res.status(201).json(result);
    
  } catch (error) {
    next(error)
  }
}