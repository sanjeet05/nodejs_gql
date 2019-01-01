const app = require('./config/express');
const { port, env } = require('./config/vars');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => console.log(`Server started on port ${port} (${env})`));