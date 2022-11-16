import express from 'express';
import {
  createFilm,
  deleteFilm,
  filmsRoutes,
  getAllFilms,
  getFilm,
  updateFilm
} from './routes/films.routes';
import { api } from './services/api';

const app = express();
app.use(express.json());

app.use('/films', filmsRoutes);

// app.get('/films', async (req, res) => {
//   try {
//     const { data } = await api.get('/films');
//     return res.send(data);
//   } catch {
//     return res.send({ message: 'Falha ao obter dados' });
//   }
// });
// app.post('/createFilm', (req, res) => {
//   const { title } = req.body;
//   return res.json(req.body);
// });
// app.get('/film', getFilm);
// app.delete('/deleteFilm', deleteFilm);
// app.put('/updateFilm', updateFilm);

app.listen(3333);
