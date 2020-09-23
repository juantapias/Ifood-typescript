import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize('adfoodio', 'root', 'root', {
   host: 'mysql',
   dialect: 'mysql',
   models: [__dirname + '/models']
 })