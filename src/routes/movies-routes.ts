import express from 'express';
import MoviesController from '../controller/MoviesController';

const moviesRouter = express.Router();

moviesRouter.get('/', MoviesController.getMovies);
moviesRouter.post('/', MoviesController.createMovie);
moviesRouter.get('/count', MoviesController.getMoviesCount);
moviesRouter.get('/:id', MoviesController.getMovieById);
moviesRouter.patch('/:id', MoviesController.patchMovieById);
moviesRouter.delete('/:id', MoviesController.deleteMovieById);

export default moviesRouter;
