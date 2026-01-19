import { Status } from '../types/status.type';

export type SortOrder = 'ASC' | 'DESC';

export interface GetCandidatesQueryDto {
  status?: Status;
  search?: string;
  sort?: SortOrder;
  page?: string;  
  limit?: string;
}