import { CandidateModel, SkillModel } from '../models';
import { Op } from 'sequelize';
import ApiError from '../exceptions/api.error';
import { Status } from '../types/status.type';
import { GetCandidatesQueryDto } from '../dtos/getCandidatesQuery.dto';

class СandidateService {
  async createCondidate(data: any) {
    const {
      name,
      position,
      email,
      phone,
      description,
      status,
      skills,
    } = data;
    const fundCandidate = await CandidateModel.findOne({
      where: { email },
    });
    if (fundCandidate) {
      throw ApiError.BadRequest(`Сandidate ${fundCandidate.email} is allready created`)
    }

    const candidate = await CandidateModel.create({
      name,
      position,
      email,
      phone,
      description,
      status,
    });

    if (skills?.length) {
      const foundSkills = await SkillModel.findAll({ where: { id: skills } });
      await candidate.setSkills(foundSkills);
    }

    const result = await CandidateModel.findByPk(candidate.id, {
      include: {
        model: SkillModel,
        attributes: ['id', 'name'],
        through: { attributes: [] },
        as: 'skills',
      },
    });

    return result

  }
  async getAllCandidates(query: GetCandidatesQueryDto) {

    const {
      status,
      search,
      sort = 'ASC',
      page = 1,
      limit = 8,
    } = query;

    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (search) {
      where.name = {
        [Op.iLike]: `%${search}%`,
      };
    }
    const offset = (+page - 1) * +limit;
    const { rows, count } = await CandidateModel.findAndCountAll({
      where,
      limit: +limit,
      offset,
      include: {
        model: SkillModel,
        attributes: ['id', 'name'],
        through: { attributes: [] },
        as: 'skills',
      },
      distinct: true,
      order: [['id', sort]],

    });

    return {
      items: rows,
      total: count,
      page: +page,
      limit: +limit,
      totalPages: Math.ceil(count / +limit),
    };
  }
  async getCandidateById(id: string) {
    const candidate = await CandidateModel.findByPk(id as string, {
      include: {
        model: SkillModel,
        attributes: ['id', 'name'],
        through: { attributes: [] },
        as: 'skills',
      },
    });
    if (!candidate) {
      throw ApiError.NotFound('Candidate not found')
    }
    return candidate
  }
  async setCandidateStatus(id: string, status: Status) {
    if (!['active', 'interview', 'rejected'].includes(status)) {
      throw ApiError.BadRequest('Invalid status');
    }
    const candidate = await CandidateModel.findByPk(id as string);
    if (!candidate) {
      throw ApiError.NotFound('Candidate not found')
    }
    candidate.status = status
    await candidate.save();
    return candidate
  }
}

export default new СandidateService;
