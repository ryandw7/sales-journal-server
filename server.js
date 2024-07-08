const express = require('express');
const server = express();
const db = require('./server/db/db.js');
const PORT = process.env.PORT || 3000;
server.use(express.static('public'));


server.get('/', async (req, res, next) => {
 const status = await db.selectAllMovies();
 res.status(200).send(status)
})

server.listen(PORT, ()=>{
    process.stdout.write('Express server is listening on port: ' + PORT)
});