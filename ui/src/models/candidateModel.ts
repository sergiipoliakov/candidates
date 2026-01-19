export interface ICandidate {
  id: number;
  name: string;
  position: string;
  status: 'active' | 'interview' | 'rejected';
  email: string;
  phone: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  skills: ISkill[];
  password: string;
  isActivated: boolean;
  activationLink?: string | null;
}

export interface ICandidatesData {
  items: ICandidate[],
  limit: number,
  page: number,
  total: number
  totalPages: number
}

export interface ISkill {
  id: number;
  name: string;
}