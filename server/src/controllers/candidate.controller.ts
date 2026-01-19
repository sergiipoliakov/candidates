import { NextFunction, Request, Response } from 'express';
import candidateService from '../../src/services/candidate.service';
import { Status } from '../types/status.type';
import { validationResult } from 'express-validator';
import ApiError from '../exceptions/api.error';
import { GetCandidatesQueryDto } from '../dtos/getCandidatesQuery.dto';

export const createCandidate = async (req: Request, res: Response, next: NextFunction) => {
  const {
    name,
    position,
    email,
    phone,
    description,
    status,
    skills,
  } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Validation error', errors.array()))
    }

    const result = await candidateService.createCondidate({
      name,
      position,
      email,
      phone,
      description,
      status,
      skills,
    });

    return res.status(201).json(result);
  } catch (error) {
    next(error)
  }
};


export const getCandidates = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const query: GetCandidatesQueryDto = {
      status: req.query.status as any,
      search: req.query.search as string,
      sort: req.query.sort === 'DESC' ? 'DESC' : 'ASC',
      limit: req.query.limit as string,
      page: req.query.page as string,
    };

    const candidates = await candidateService.getAllCandidates(query)

    res.json(candidates);

  } catch (error) {
    next(error)
  }
};

export const getCandidateById = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { id } = req.params;
    const candidate = await candidateService.getCandidateById(id as string);
    res.json(candidate);

  } catch (error) {
    next(error)
  }

};

export const updateCandidateStatus = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Status is required', errors.array()))
    }
    const { params: { id }, body: { status } } = req;
    const candidate = await candidateService.setCandidateStatus(id as string, status as Status);
    res.json({
      id: candidate.id,
      status: candidate.status,
    });
  } catch (error) {
    next(error)
  }

};
