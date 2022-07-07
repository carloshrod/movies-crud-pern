const express = require('express');
const favicon = require('express-favicon');
const cors = require('cors');
const morgan = require('morgan');
const { router } = require('./routes/movies.routes');
const path = require('path');
require("dotenv").config();

const app = express();

//Middlewares:
app.use(morgan("dev"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router:
app.use(router)

// Error middleware:
app.use((error, req, res, next) => {
    return res.json({ estado: "error", msg: error.message })
})

// Deploying settings:
const PORT = process.env.PORT || 8080;

app.use(favicon(__dirname + '/frontend/build/favicon.ico'));

__dirname = path.resolve();
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    router.get('/', (req, res) => {
        res.send("Plataforma de Gestión Catastral - Backend");
    });
};

// Start server:
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}!!!`);
})
