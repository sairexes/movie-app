require('dotenv').config()

module.exports = {
    env: {
        TMDB_API_KEY: process.env.TMDB_API_KEY,
    }
}

console.log({
    TMDB_API_KEY: process.env.TMDB_API_KEY,
})