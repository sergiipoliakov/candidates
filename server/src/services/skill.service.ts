import ApiError from "../exceptions/api.error";
import { SkillModel } from "../models";

class SkillService {
  async createSkill(name: string) {
     const normalizedName = name.toLowerCase().trim();

  const skill = await SkillModel.findOne({
    where: { name: normalizedName },
  });

  if (skill) {
    throw ApiError.BadRequest(`Skill ${skill.name} already exists`);
  }
    const result = await SkillModel.create({ name });
    return result
  }
}

export default new SkillService;
