# Movie Finder API
A small Express server that gets movie data from the OMDb API and sends it back as JSON.

## Setup
1. Clone the repo, then run `npm install`
2. Create a `.env` file with: `OMDB_API_KEY=your_key_here`
3. Start it with `node server.js` (runs on http://localhost:3001)

## Endpoints
- `GET /api/search?title=batman`: search movies by title (400 if title is missing)
- `GET /api/movies/:id`: one movie's details by IMDb ID, e.g. `/api/movies/tt0372784`

## What tripped me up
- **Switching to `"type": "module"`.** I had to use `import`/`export` instead of `require`, load dotenv with `import 'dotenv/config'`, and add `.js` to the end of imports of my own files.
- **Wrong port.** I started on 3000, but the assignment's test URLs use 3001.
- **OMDb "errors" that aren't errors.** When no movie matches, OMDb still sends a success reply, just with `Response: "False"`. axios doesn't treat that as an error, so I had to check for it myself and send a 404.
- **Restarting the server.** Code changes don't show up until I stop the server (Ctrl + C) and run `node server.js` again.

## Reflection
Splitting the code into `server.js`, a router and a controller felt like extra work at first, but it clicked when I saw how a request travels: the browser hits `/api/search`, `server.js` sends it to the router, and the router hands it to the controller, which calls OMDb and sends back JSON. I also learned why the API key goes in `.env` and `.gitignore`: so my secret never ends up on GitHub. Next, I'd like to add a `npm start` script and try building a simple front end that uses this API.
