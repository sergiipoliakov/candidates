import { query } from 'express-validator';

export const getCandidatesValidation = [
  query('status')
    .optional()
    .isIn(['active', 'interview', 'rejected'])
    .withMessage('Invalid status'),

  query('sort')
    .optional()
    .isIn(['ASC', 'DESC'])
    .withMessage('Invalid sort order'),

  query('search')
    .optional()
    .isString()
    .isLength({ min: 1, max: 50 })
    .withMessage('Search must be 1-50 characters'),
];
