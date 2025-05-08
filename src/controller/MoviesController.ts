import { Request, Response } from 'express';
import { MovieService } from '../service/MoviesService';
import { MovieModel } from '../model/MovieModel';

const movieService = new MovieService({ useMock: true });

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
		result = result.filter((movie) => movie.releaseYear === Number(year));
	}

	if (genre) {
		result = result.filter((movie) =>
			movie.genre.toLowerCase().includes(String(genre).toLowerCase())
		);
	}

	return result;
}

const getMovies = (req: Request, res: Response) => {
	try {
		let result = movieService.getAll();

		if (result.length === 0) {
			throw new Error('No movies registered');
		}

		res.json(result);
	} catch (error) {
		if (error instanceof Error) res.status(404).json({ error: error.message });
	}
};

const createMovie = (req: Request, res: Response) => {
	const newMovie = req.body;

	if (!newMovie) {
		throw new Error('Invalid movie information provided');
	}

	const result = movieService.create(newMovie);
	if (!result) {
		throw new Error('Error creating movie');
	}

	res.json(result);
};

const getMoviesCount = (req: Request, res: Response) => {
	let result = movieService.getAll();
	result = applyQueryFilters(result, req.query);
	res.json({ count: result.length });
};

const getMovieById = (req: Request, res: Response) => {
	try {
		const id = Number(req.params.id);
		const result = movieService.getById(id);

		if (!id) {
			throw new Error(`Movie id not valid`);
		}

		res.json(result);
	} catch (error) {
		if (error instanceof Error) res.status(404).json({ error: error.message });
	}
};

const patchMovieById = (req: Request, res: Response) => {
	try {
		const newMovie = req.body;
		let { id } = req.params;

		if (!Number(id)) {
			throw new Error(`Movie id not valid`);
		}

		if (!newMovie) {
			throw new Error('Invalid movie information provided');
		}

		const result = movieService.update({ id: Number(id), newMovie });

		res.json(result);
	} catch (error) {
		if (error instanceof Error) res.status(404).json({ error: error.message });
	}
};

const deleteMovieById = (req: Request, res: Response) => {
	try {
		let { id } = req.params;

		if (!Number(id)) {
			throw new Error(`Movie id not valid`);
		}

		const result = movieService.remove(Number(id));

		res.json(result);
	} catch (error) {
		if (error instanceof Error) res.status(404).json({ error: error.message });
	}
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
