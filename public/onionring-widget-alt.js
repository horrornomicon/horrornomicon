// originally made by allium house: https://allium.house/garden/onionring/

// list of sites
var sites = [
    'https://horrornomicon.nekoweb.org/',       
    'https://rottenenigma.nekoweb.org/',
    'https://crunk.nekoweb.org/',
    'https://clownzcorner.com/',
    'https://receptions.neocities.org',
    'https://koiledwire.neocities.org/',
    'https://lunarcorvus.com',
    'https://killdozer.online/',
    'https://karchah.nekoweb.org/',
    'https://mixtapesanddialtones.neocities.org/'
];

// name of the ring
var ringName = 'the horrornomicon';
var ringID = 'horrornomicon';

// widget banner options
var ringBanner = 'https://horrornomicon.nekoweb.org/images/banner-eye.png';
// where it goes when clicked
var ringHome = 'https://horrornomicon.nekoweb.org/';

var arrowPrev = 'https://horrornomicon.nekoweb.org/images/handleft.gif';
var arrowNext = 'https://horrornomicon.nekoweb.org/images/handright.gif';

var tag = (document.currentScript && document.currentScript.parentElement && document.currentScript.parentElement.id === ringID) ? document.currentScript.parentElement : document.getElementById(ringID);
var thisSite = window.location.href.replace('https://horrornomicon.neocities.org/', sites[0]);
var thisIndex = null;
for (var i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break; 
  }
}

var homeURL = (typeof ringHome !== 'undefined' && ringHome) ? ringHome : (sites.length > 0 ? sites[0] : '#');
var bannerURL = (typeof ringBanner !== 'undefined' && ringBanner) ? ringBanner : '';
var bannerMarkup = `
  <a href='${homeURL}' target='_blank' class='webring-banner-link'>
    <img src='${bannerURL}' alt='${ringName}' class='webring-banner-img'>
  </a>`;

// notice if missing
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
  <div class='webring-unlisted-wrap'>
    <div class='webring-banner-cell'>
      ${bannerMarkup}
    </div>
    <div class='webring-unlisted'>
      this site is not part of the horrornomicon. contact us to be added!
    </div>
  </div>
  `);
}
else {
  // next and previous sites
  var previousIndex = (thisIndex - 1 < 0) ? sites.length - 1 : thisIndex - 1;
  var nextIndex = (thisIndex + 1 >= sites.length) ? 0 : thisIndex + 1;

  tag.insertAdjacentHTML('afterbegin', `
  <table>
    <tr>
      <td class='webring-arrow webring-prev'>
        <a href='${sites[previousIndex]}' title='Previous Site'><img src='${arrowPrev}' alt='&#9664;'></a>
      </td>
      <td class='webring-banner-cell'>
        ${bannerMarkup}
      </td>
      <td class='webring-arrow webring-next'>
        <a href='${sites[nextIndex]}' title='Next Site'><img src='${arrowNext}' alt='&#9654;'></a>
      </td>
    </tr>
  </table>
  `);
}