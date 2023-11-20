const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('./src/pages/index.js');
});

app.listen(3000, () => "app is running on port 3000");