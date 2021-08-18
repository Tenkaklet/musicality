const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connection = require('./Db/config');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

app.use(cors({origin: true, credentials: true}));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use('/api',routes);

// database connection
connection();

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
