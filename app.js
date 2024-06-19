import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();

// Fayl URLini fayl tizim yo'liga aylantirish
const __filename = fileURLToPath(import.meta.url);
// Fayl yo'lidan katalog yo'lini olish
const __dirname = dirname(__filename);

app.get('/:id', (req, res) => {
  res.sendFile(join(__dirname, `json/${req.params.id}.json`));
});


let respp = 0
app.use("/", (req, res, next) => {
    respp++;
    next()
})
app.get("/", (req, res) => {
    res.send(`${respp}`)
})



// mavjud bo'lmagan route qidirilganda qayataradi
app.use((req, res, next) => {
    res.status(404).send("This rout doesn't exist");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});