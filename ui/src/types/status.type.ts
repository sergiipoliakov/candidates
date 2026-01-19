export const STATUS = {
  ACTIVE: 'active',
  INTERVIEW: 'interview',
  REJECTED: 'rejected',
} as const;

export type Status = typeof STATUS[keyof typeof STATUS];
