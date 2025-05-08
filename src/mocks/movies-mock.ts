import { MovieType } from '../types/movie-type';

export const moviesMock: MovieType[] = [
	{
		id: 1,
		title: 'The Shawshank Redemption',
		description:
			'Two imprisoned men bond over the years, finding redemption through acts of decency.',
		genre: 'Drama',
		rating: 9.3,
		director: 'Frank Darabont',
		releaseYear: 1994,
		durationInSeconds: 8520,
	},
	{
		id: 2,
		title: 'Inception',
		description:
			"A skilled thief is given a chance at redemption if he can successfully plant an idea into a person's subconscious.",
		genre: 'Sci-Fi',
		rating: 8.8,
		director: 'Christopher Nolan',
		releaseYear: 2010,
		durationInSeconds: 8880,
	},
	{
		id: 3,
		title: 'Pulp Fiction',
		description:
			'The lives of criminals and others intertwine in tales of violence and redemption.',
		genre: 'Crime',
		rating: 8.9,
		director: 'Quentin Tarantino',
		releaseYear: 1994,
		durationInSeconds: 9480,
	},
	{
		id: 4,
		title: 'Spirited Away',
		description:
			'A young girl enters a world of spirits and must save her parents and return to the human world.',
		genre: 'Animation',
		rating: 8.6,
		director: 'Hayao Miyazaki',
		releaseYear: 2001,
		durationInSeconds: 7500,
	},
	{
		id: 5,
		title: 'Parasite',
		description:
			'A poor family schemes to become employed by a wealthy family, but things spiral out of control.',
		genre: 'Thriller',
		rating: 8.5,
		director: 'Bong Joon-ho',
		releaseYear: 2019,
		durationInSeconds: 7920,
	},
];
