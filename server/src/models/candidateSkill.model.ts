// candidate-skill.pg.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { CandidateModel } from './candidate.model';
import { SkillModel } from './skill.model';

export class CandidateSkillModel extends Model {
  declare candidateId: number;
  declare skillId: number;
}

CandidateSkillModel.init(
  {
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CandidateModel,
        key: 'id',
      },
    },
    skillId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SkillModel,
        key: 'id',
      },
    },
  },
  { sequelize, tableName: 'candidate_skills', timestamps: false }
);

export default CandidateSkillModel;
