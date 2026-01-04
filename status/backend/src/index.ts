import express from 'express';
const app = express();
const PORT = process.env.PORT || 3002;
app.get('/', (_req, res) => res.send('Status Backend OK'));
app.listen(PORT, () => console.log(Status backend running on port ));