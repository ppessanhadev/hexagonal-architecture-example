import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'ok' });
});

app.listen(3333);
