const express = require('express');
// used for valheadation
const app = express();
app.use(express.json());
const cheerio = require('cheerio');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// CREATE Request Handler
app.post('/api/trans', (req, res) => {
  const { error } = req.body.html;
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const $ = cheerio.load(req.body.html);
  // check if file is from 'abadis'
  if ($.text().includes('معنی در دیکشنری آبادیس')) {
    // check if word has meaning or not
    if (!$.text().includes('متاسفانه معنی عبارت شما پیدا نشد')) {
      // parse html file from 'abadis' and extract desired parts
      const translate = $('div.lun.boxBd.boxMain').html();
      const word = $('.boxLtr h1').html();
      const abadis = {
        translate,
        word,
      };
      res.send(abadis);
      // res.json(abadis);
    } else res.send('error: meaningless word');
  } else res.send('error: not a translate page');
});

// PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8181;
app.listen(port, () => console.log(`Listening on port ${port}..`));
