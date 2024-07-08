const client = require('../../client.js');
if (client.connected === false) {
    throw new Error('The client is not available...');
}
const selectAllMovies = async () => {
    try {
        const query = await client.query("SELECT * FROM movies;");
        return query.rows;
    } catch (err) {
        console.log(err)
    }
}

const selectMovieById = async (id) => {
    try {
        const query = await client.query(`SELECT * FROM movies WHERE id = ${id};`);
        return query.rows;
    } catch (err) {
        console.log(err);
    }
}

const addNewMovie = async (name, year) => {
    const allMovies = await selectAllMovies();
    const id = allMovies.length + 1;
    const values = `${id}, '${name}', ${year}`
    const query = await client.query(`INSERT INTO movies (id, name, year) VALUES (${values});`);
    query;
}

addNewMovie('test', 2024);
module.exports = {
    selectAllMovies: selectAllMovies,
    selectMovieById: selectMovieById,
    addNewMovie: addNewMovie
}

