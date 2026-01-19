import type { AxiosResponse } from "axios";
import type { ICandidate, ICandidatesData } from "../models/candidateModel";
import $api from "../http";
import type { Status } from "../types/status.type";
import type { IFilters } from "../types/filters.types";

export default class UserService {
  static async getCandidates(filters: IFilters): Promise<AxiosResponse<ICandidatesData>> {
    const {
      search, 
      status, 
      limit, 
      page
    } = filters
    return $api.get<ICandidatesData>(`/candidates?${search ? 'search=' + search : ''}${status ? '&status=' + status : ''}${page ? '&page=' + page : ''}${limit ? '&limit=' + limit : ''}`)
  }
  static async getSingeCandidate(id: number): Promise<AxiosResponse<ICandidate>> {
    return $api.get<ICandidate>(`/candidates/${id}`)
  }
  static async changeStatus(id: number, status: Status): Promise<AxiosResponse<ICandidate>> {
    return $api.patch<ICandidate>(`/candidates/${id}/status`, { status })
  }
}