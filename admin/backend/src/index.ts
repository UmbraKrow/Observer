import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;
app.get('/', (_req, res) => res.send('Admin Backend OK'));
app.listen(PORT, () => console.log(Admin backend running on port ));