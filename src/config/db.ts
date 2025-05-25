import { Sequelize } from 'sequelize-typescript';
import env from './env';
import { Movie } from '../models/Movie';

export const sequelize = new Sequelize({
	dialect: 'mysql',
	host: env.API_HOST,
	username: env.DB_USER,
	password: env.DB_PASSWORD,
	database: env.DB_NAME,
	models: [Movie],
	logging: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	define: {
		timestamps: false,
	},
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});
