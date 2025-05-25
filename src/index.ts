import express from 'express';
import chalk from 'chalk';
import moviesRouter from './routes/movies-routes';
import env from './config/env';
import { sequelize } from './config/db';

const PORT = env.API_PORT || 3000;

const app = express();
app.use(express.json());

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/', (_, res) => {
	res.json('🎬 Welcome to MoviesAPI!');
});

apiRouter.use('/movies', moviesRouter);

const start = async () => {
	try {
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log(
				`🎬 Action! Server running at ${chalk.blue(
					'http://localhost:' + PORT + '/api'
				)}`
			);
		});
	} catch (error: unknown) {
		console.error('Error while starting:', error as Error);
	}
};

start();
