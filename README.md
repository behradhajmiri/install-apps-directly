# Install apps directly

This is a micro-frontend react app ('installAppsDirectly') for zarebin that shows apps from 'bazaar' and 'myket' for installing directly.

This app gets `.html` files as input and uses cheerio for parsing the `.html` files.

For using this app please Follow the steps below:

1. Get `.html` files from websites by command: `wget -E -k 'url'`
2. Import `.html` files to `index.js` file in the sources folder
3. Export imported files as samples
4. Give sources to component `ShowTranslate`

### How to run
1. Install requirements: `npm install`
2. Start app: `npm start`
3. Open http://localhost:3008/

### How to build
1. Install requirements `npm install`
2. Build  app `npm run build`
