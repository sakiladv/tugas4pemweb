const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware untuk menyajikan file statis dari folder yang sama
app.use(express.static(path.join(__dirname)));

// Rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
