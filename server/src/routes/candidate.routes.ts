import { Router, NextFunction, Request, Response } from 'express';

import {
  getCandidates,
  getCandidateById,
  updateCandidateStatus,
  createCandidate
} from '../controllers/candidate.controller';
import { createSkill } from '../controllers/skill.controller';
import { body } from 'express-validator';
import { getCandidatesValidation } from '../validations/candidate.validation';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();


router.post(
  '/candidates', 
  body('email').isEmail(),
  body('name').isLength({min: 2, max: 50}),
  body('phone').isLength({min: 6, max: 12}),
  body('position').isLength({min: 2, max: 20}),
  body('status').isLength({min: 2, max: 20}),
  createCandidate
);

router.post('/skill', createSkill);

router.get(
  '/candidates', 
  getCandidatesValidation,
  validateRequest,
  getCandidates
);
router.get('/candidates/:id', getCandidateById);
router.patch('/candidates/:id/status', 
  body('status').exists(),
  updateCandidateStatus);

export default router;
