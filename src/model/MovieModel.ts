import { MovieType } from '../types/movie-type';

export class MovieModel {
	id: number;
	title: string;
	description: string;
	genre: string;
	rating: number;
	director: string;
	releaseYear: number;
	durationInSeconds: number;

	constructor({
		id,
		title,
		description,
		genre,
		rating,
		director,
		releaseYear,
		durationInSeconds,
	}: MovieType) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.genre = genre;
		this.rating = rating;
		this.director = director;
		this.releaseYear = releaseYear;
		this.durationInSeconds = durationInSeconds;
	}
}
