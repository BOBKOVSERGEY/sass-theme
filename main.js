var THEMENUMBER = 1;
var DEFAULTTHEME = 1;
var EXT = 'css';

function getUrl(num) {
  return EXT + '/' + EXT + '-styles.th' + num + '.css';
}

function getThemeNumber() {
  THEMENUMBER = THEMENUMBER % 2 === 0 ? 1 : 2;
  return THEMENUMBER;
}

function init() {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', getUrl(DEFAULTTHEME));
  document.head.appendChild(link);
}
function initListener() {
  document.querySelector('.nav__theme')
    .addEventListener('click', changeTheme);
}

function changeTheme() {
  document.head.querySelector('link')
    .setAttribute('href', getUrl(getThemeNumber()))
}

init();
window.addEventListener('load', initListener);