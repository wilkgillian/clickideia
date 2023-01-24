import { useContext } from 'react';
import { FilmsContext } from '../contexts/filmsContext';

export function useFilms() {
  const context = useContext(FilmsContext);

  return context;
}
