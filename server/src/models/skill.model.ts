import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';

export interface SkillAttributes {
  id: number;
  name: string;
}

type SkillCreationAttributes = Optional<SkillAttributes, 'id'>;

export class SkillModel extends Model<
  SkillAttributes,
  SkillCreationAttributes
> { 
  name: any
}

SkillModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value: string) {
        this.setDataValue('name', value.toLowerCase().trim());
      },
    },
  },
  {
    sequelize,
    tableName: 'skills',
    timestamps: false,
  }
);
