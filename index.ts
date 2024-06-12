import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { getCompanies } from './queries';

const app = express();
const PORT = process.env.PORT || 3000;

const db = new sqlite3.Database('sws.sqlite3');

app.get('/companies', (req: Request, res: Response) => {
  getCompanies(db, req, res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
