import { Request, Response } from 'express';
import { MovieService } from '../service/MoviesService';
import { MovieModel } from '../@types/movie';

const movieService = new MovieService();

interface QueryFilters {
	title?: string;
	year?: number;
	genre?: string;
}

function applyQueryFilters(
	movies: MovieModel[],
	query: QueryFilters
): MovieModel[] {
	let result = movies;
	const { title, year, genre } = query;

	if (title) {
		result = result.filter((movie) =>
			movie.title.toLowerCase().includes(String(title).toLowerCase())
		);
	}

	if (year) {
		result = result.filter((movie) => movie.release_year === Number(year));
	}

	if (genre) {
		result = result.filter((movie) =>
			movie.genre.toLowerCase().includes(String(genre).toLowerCase())
		);
	}

	return result;
}

const getMovies = async (req: Request, res: Response) => {
	let result = await movieService.getAll();
	if (result.length === 0) {
		return res.status(404).json({ message: 'No movies found' });
	}

	res.status(200).json(result);
};

const createMovie = async (req: Request, res: Response) => {
	const newMovie = req.body;
	if (!newMovie) {
		res.status(404).json({ error: 'Invalid movie information provided' });
	}

	const result = await movieService.create(newMovie);
	if (!result) {
		res.status(404).json({ error: 'Error creating movie' });
	}

	res.status(201).json(result);
};

const getMoviesCount = async (req: Request, res: Response) => {
	let result = await movieService.getAll();
	const filteredResults = applyQueryFilters(result, req.query);
	res.json({ count: filteredResults.length });
};

const getMovieById = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	if (!id) {
		return res.status(404).json({ error: 'Invalid id provided' });
	}

	const result = await movieService.getById(id);
	if (!result) {
		return res.status(404).json({ error: `Movie of id ${id} not found` });
	}

	res.status(200).json(result);
};
const patchMovieById = async (req: Request, res: Response) => {
	let { id } = req.params;
	if (!Number(id)) {
		res.status(404).json({ error: 'Movie id not valid' });
	}

	const newMovie = req.body;
	if (!newMovie) {
		res.status(404).json({ error: 'Invalid movie information provided' });
	}

	const result = await movieService.update({ id: Number(id), newMovie });
	if (!result) {
		return res.status(404).json({ error: `Movie of id ${id} not found` });
	}

	res.status(200).json(result);
};

const deleteMovieById = async (req: Request, res: Response) => {
	let { id } = req.params;
	if (!Number(id)) {
		res.status(404).json({ error: 'Movie id not valid' });
	}

	const result = await movieService.remove(Number(id));
	if (!result) {
		return res.status(404).json({ error: `Movie of id ${id} not found` });
	}

	res.status(204).json(result);
};

const MoviesController = {
	getMovies,
	createMovie,
	getMoviesCount,
	getMovieById,
	patchMovieById,
	deleteMovieById,
};

export default MoviesController;
