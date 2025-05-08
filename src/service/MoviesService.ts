import { moviesMock } from '../mocks/movies-mock';
import { MovieModel } from '../model/MovieModel';

export class MovieService {
	movies: MovieModel[];
	nextId: number;

	constructor({ useMock }: { useMock: boolean }) {
		if (useMock) {
			this.movies = moviesMock;
			this.nextId = moviesMock.length + 1;
		} else {
			this.movies = [];
			this.nextId = 1;
		}
	}

	getAll() {
		return this.movies;
	}

	getById(id: number) {
		const movieMatch = this.movies.find((movie) => movie.id === id);

		if (!movieMatch) {
			throw new Error(`Movie of id ${id} not found`);
		}

		return movieMatch;
	}

	create(newMovie: Omit<MovieModel, 'id'>) {
		this.movies.push(
			new MovieModel({
				id: this.nextId,
				...newMovie,
			})
		);
		this.nextId += 1;
		return this.movies.at(-1);
	}

	update({ id, newMovie }: { id: number; newMovie: Omit<MovieModel, 'id'> }) {
		const matchIndex = this.movies.findIndex((movie) => movie.id === id);

		if (matchIndex === -1) {
			throw new Error(`Movie of id ${id} not found`);
		}

		this.movies[matchIndex] = new MovieModel({
			...this.movies[matchIndex],
			...newMovie,
		});

		return this.movies[matchIndex];
	}

	remove(id: number) {
		const matchIndex = this.movies.findIndex((movie) => movie.id === id);

		if (matchIndex === -1) {
			throw new Error(`Movie of id ${id} not found`);
		}

		return this.movies.splice(matchIndex, 1)[0];
	}
}
