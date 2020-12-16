const express = require('express');
const port = 3000;
const superherosRoutes = require('./routes/superheros');

const app = express();

app.use(express.static('public'));

app.use('/api/superheros',superherosRoutes);



app.listen(port, () => console.log(`Server is listening on port ${port}`));
