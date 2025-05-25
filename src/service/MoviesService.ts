import { MovieDTO } from '../dtos/movie-dtos';
import { Movie } from '../models/Movie';

export class MovieService {
	async getAll() {
		const movies = await Movie.findAll();
		return movies;
	}

	async getById(id: number) {
		const movieMatch = await Movie.findByPk(id);
		return movieMatch;
	}

	async create(newMovie: MovieDTO) {
		const createdMovie = Movie.create({ ...newMovie });
		return createdMovie;
	}

	async update({ id, newMovie }: { id: number; newMovie: MovieDTO }) {
		const movieMatch = await Movie.findByPk(id);
		return await movieMatch?.update(newMovie);
	}

	async remove(id: number) {
		const movieMatch = await Movie.findByPk(id);
		return await movieMatch?.destroy();
	}
}
