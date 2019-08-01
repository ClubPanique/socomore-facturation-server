//Content-Security-Policy: "default-src 'self'; script-src 'self'

const express = require('express');
const apiRouter = require('./routes');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); //Convertit le body des requêtes en json.

app.use('/v1/', apiRouter); //Utilise les routes définies dans ./routes, avec le point de départ /v1/

app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
