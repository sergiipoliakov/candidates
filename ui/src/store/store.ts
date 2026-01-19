import { makeAutoObservable } from "mobx";
import type { ICandidate, ICandidatesData } from "../models/candidateModel";
import CandidaterService from '../services/CandidaterService'
import type { Status } from "../types/status.type";
import { getErrorMessage } from "../utils/errorHandler";
import type { IFilters } from "../types/filters.types";

export default class Store {
  candidates = {} as ICandidatesData
  isLoading = false
  singleCandidate = {} as ICandidate
  error: string | null = null;
  constructor() {
    makeAutoObservable(this)
  }

  setCandidates(candidates: ICandidatesData) {
    this.candidates = candidates
  }
  setSingleCandidate(candidate: ICandidate) {
    this.singleCandidate = candidate
  }
  changeStatus(id: number, status: Status) {
    if (this.singleCandidate?.id === id) {
      this.singleCandidate.status = status;
    }

    const candidate = this.candidates.items.find(c => c.id === id);
    if (candidate) {
      candidate.status = status;
    }
  }
  setError(error: string | null) {
    this.error = error;
  }
  async getCandidates(filters: IFilters) {

    this.isLoading = true;
    this.error = null;
    try {
      const response = await CandidaterService.getCandidates(filters);
      this.setCandidates(response.data)
      return this.candidates;

    } catch (error) {
      const message = getErrorMessage(error);
      this.setError(message);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }
  async getCandidate(id: number) {
    this.error = null;
    try {
      const response = await CandidaterService.getSingeCandidate(id);
      this.setSingleCandidate(response.data)
      return this.singleCandidate;

    } catch (error) {
      const message = getErrorMessage(error);
      this.setError(message);
      throw error;
    }
  }

  async updateCandidateStatus(id: number, status: Status) {
    this.error = null;
    try {
      const response = await CandidaterService.changeStatus(id, status);
      this.changeStatus(id, response.data.status);
      return this.singleCandidate;

    } catch (error) {
      const message = getErrorMessage(error);
      this.setError(message);
      throw error;
    }
  }
}