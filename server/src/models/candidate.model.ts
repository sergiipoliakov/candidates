import {
  DataTypes,
  Model,
  Optional,
  BelongsToManyAddAssociationsMixin,
  BelongsToManySetAssociationsMixin,
} from 'sequelize';
import sequelize from '../db';
import { SkillModel } from './skill.model';
import { CandidateSkillModel } from './candidateSkill.model'; // промежуточная таблица

export interface CandidateAttributes {
  id: number;
  name: string;
  position: string;
  status: 'active' | 'interview' | 'rejected';
  email: string;
  phone?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CandidateCreationAttributes = Optional<
  CandidateAttributes,
  'id' | 'status' | 'description' | 'createdAt' | 'updatedAt'
>;

export class CandidateModel extends Model<CandidateAttributes, CandidateCreationAttributes> {
  declare id: number;
  declare name: string;
  declare position: string;
  declare status: 'active' | 'interview' | 'rejected';
  declare email: string;
  declare phone?: string;
  declare description?: string;

  declare setSkills: BelongsToManySetAssociationsMixin<SkillModel, number>;
  declare addSkills: BelongsToManyAddAssociationsMixin<SkillModel, number>;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

CandidateModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM('active', 'interview', 'rejected'),
      allowNull: false,
      defaultValue: 'active',
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phone: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.TEXT,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'candidates',
    timestamps: true,
  }
);

CandidateModel.belongsToMany(SkillModel, {
  through: CandidateSkillModel,
  foreignKey: 'candidateId',
});
SkillModel.belongsToMany(CandidateModel, {
  through: CandidateSkillModel,
  foreignKey: 'skillId',
});

export default CandidateModel;
