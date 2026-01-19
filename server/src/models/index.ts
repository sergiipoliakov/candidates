import { CandidateModel } from './candidate.model';
import { SkillModel } from './skill.model';
import { CandidateSkillModel } from './candidateSkill.model';

CandidateModel.belongsToMany(SkillModel, {
  through: CandidateSkillModel, 
  foreignKey: 'candidateId',
  as: 'skills' 
});
SkillModel.belongsToMany(CandidateModel, {
  through: CandidateSkillModel,
  foreignKey: 'skillId',
  as: 'candidates'
});

export {
  CandidateModel,
  SkillModel,
  CandidateSkillModel,
};
