# Install apps directly

This is a micro-frontend react app for zarebin that shows apps for installing directly.

This app gets `.html` files as input and uses cheerio for parsing the `.html` files.

For using this app please Follow the steps below:

1. Get `.html` files from websites by command: `wget -E -k 'url'`
2. Import `.html` files to `index.js` file in the sources folder
3. Export imported files as samples
4. Give sources[...] to components as `src`


### How to run
1. Install requirements `npm install`
2. Start app `npm start`

### How to build
1. Install requirements `npm install`
2. Build  app `npm run build`
