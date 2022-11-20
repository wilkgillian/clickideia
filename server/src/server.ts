import 'dotenv/config';
import express from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);
// app.use("/films", filmsRoutes);
// app.use("/specifications", specificationRoutes);

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

app.listen(3333, () => console.log('Server is running'));
