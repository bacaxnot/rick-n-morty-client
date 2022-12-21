<!-- Project introduction -->

# **Rick'n Morty Client**

This is the client side of a basic web app made to consumes data from the [Rick and Morty API](https://rickandmortyapi.com).

It runs using [vite](https://vitejs.dev) as bundler, [React.js](https://reactjs.org) as the main UI library for component structuring and [SASS](https://sass-lang.com) for CSS preprocessing.

The data consumption from the API is made trough [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), but can be easily changed to more modern approaches such as [axios](https://axios-http.com/docs/intro) since data fetching logic is encapsulated using the [Facade pattern](https://en.wikipedia.org/wiki/Facade_pattern) inside the API class (src/entities/classes/API).

<!-- Project Setup -->

## **Set up**

---

To run the project your computer must have installed at least:

-   [Node.js](https://nodejs.dev/en/) v16.18.0.
-   npm v8.19.2.

Then, run the following commands in your terminal:

`npm i`\
`npm run dev`

It will start a development server. All the dependencies are listed in the package.json, as usual.

To build the project, run the command:

`npm run build`

And that's it. Happy coding!
