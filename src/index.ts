import dotenv from 'dotenv';
import express from 'express';
import chalk from 'chalk';
import moviesRouter from './routes/movies-routes';

dotenv.config();
const PORT = process.env.API_PORT || 3000;

const app = express();
app.use(express.json());

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/', (_, res) => {
	res.json('🎬 Welcome to MoviesAPI!');
});

apiRouter.use('/movies', moviesRouter);

app.listen(PORT, () => {
	console.log(
		`🎬 Action! Server running at ${chalk.blue(
			'http://localhost:' + PORT + '/api'
		)}`
	);
});
