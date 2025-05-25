import { MovieModel } from '../@types/movie';

export type MovieDTO = Omit<MovieModel, 'id'>;
