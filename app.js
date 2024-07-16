import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(PORT, () => console.info(`Server is running at http://${HOST}:${PORT}`));
