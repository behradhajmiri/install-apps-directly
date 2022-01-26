import cheerio from 'cheerio';
import React from 'react';

export default function ShowApps({ src }) {
  // get full html file
  const $ = cheerio.load(src);
  // check if file is from 'bazaar'
  if ($.text().includes('کافه بازار')) {
    // parse html file from 'bazaar' and extract desired parts
    const image = { __html: $('div.Box.padding.margin-b img') };
    const name = { __html: $('div.Box.padding.margin-b div.CoverHeader__content') };
    const install = { __html: $('div.Box.padding.margin-b div.CoverHeader__btn-area') };
    const size = { __html: $('div.Box.padding.margin-b div.InfoCube.InfoCube dd.InfoCube__content:nth(2)') };
    const star = { __html: $('div.Box.padding.margin-b div.InfoCube.InfoCube--link') };
    return (
      <div className="bazaar">
        <div className="title">بازار</div>
        <div dangerouslySetInnerHTML={image} />
        <div dangerouslySetInnerHTML={name} />
        <div dangerouslySetInnerHTML={install} />
        <div dangerouslySetInnerHTML={size} />
        <div dangerouslySetInnerHTML={star} />
      </div>
    );
  }
  // check if file is from 'myket'
  else if ($.text().includes('مایکت')) {
    // parse html file from 'myket' and extract desired parts
    const image = { __html: $('.appImage img') };
    const name = { __html: $('.topApp-section h1').removeAttr('style') };
    const install = { __html: $('.topApp-section div div a') };
    const version = { __html: $('.tbl-app-detail tr:first') };
    const owner = { __html: $('.tbl-app-detail tr:last') };
    const size = { __html: $('.tbl-app-detail td:nth(5)') };
    const star = { __html: $('.tbl-app-detail tr:nth(3)') };
    const vote = { __html: $('.tbl-app-detail tr:nth(4)') };
    return (
      <div className="myket">
        <div className="title">مایکت</div>
        <div dangerouslySetInnerHTML={image} />
        <div className="CoverHeader__content">
          <span dangerouslySetInnerHTML={name} />
          <div className="CoverHeader__title-subtitle">
            <div dangerouslySetInnerHTML={owner} />
            <div className="AppVersion AppVersion--linked" dangerouslySetInnerHTML={version} />
          </div>
        </div>
        <div className="CoverHeader__btn-area btn btn-primary btn-large" dangerouslySetInnerHTML={install} />
        <div className="InfoCube__content" dangerouslySetInnerHTML={size} />
        <div className="InfoCube InfoCube--link">
          <dd className="InfoCube__content" dangerouslySetInnerHTML={star} />
          <dt className="InfoCube__title" dangerouslySetInnerHTML={vote} />
        </div>
      </div>
    );
  }
  // check if file is neither from 'bazaar' nor 'myket'
  else return (
    <div className="bazaar">
      <div className="title">خطا</div>
      <div>منبع مورد نظر صحیح نمی باشد</div>
    </div>
  )
}
