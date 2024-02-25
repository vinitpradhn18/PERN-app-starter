import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Client } = pg;

const client = new Client({
    user: 'postgres',
    host: 'db',
    database: 'postgres',
    password: '1234',
    port: 5432,
});
// client.on("connect", client => {
//     client
//       .query("CREATE TABLE IF NOT EXISTS values (number INT)")
//       .catch(err => console.log("PG ERROR", err));
//   });

app.get('/api', (req, res) => res.send('Hello World!'));



app.listen(4000, () => console.log(`App running on port 4000.`));