const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('UTAMA');
});

app.get('/hello', (req, res) => {
    console.log({ urlParam: req.query });
    res.send('Hello World! Kakak');
});

app.put('/username', (req, res) => {
    console.log({ updateData: req.body });
    res.send('Update berhasil');
});

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body });
    res.send('Login berhasil');
});

// Endpoint untuk metode DELETE
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Menghapus user dengan ID: ${userId}`);
    // Logika penghapusan user
    res.send(`User dengan ID ${userId} berhasil dihapus`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
