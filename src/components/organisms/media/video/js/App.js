// let searchWord;

// function setSearchWord() {
//   let newSearchWord = document.getElementsByClassName('searchInput')[0].value;
//   searchWord = newSearchWord;
//   console.log(newSearchWord, searchWord);
// }

import Presenter from './Presenter.js';
import Repository from './Repository.js';
import Header from './Header/Header.js';
import Body from './Body/Body.js';

let repository = new Repository();
let header = new Header();
let body = new Body();

let presenter = new Presenter(repository, header, body);

header.setPresenter(presenter);
body.setPresenter(presenter);

// =====================================

function parseHTML(html) {
  var t = document.createElement('template');
  t.innerHTML = html;
  return t.content.cloneNode(true);
}

let headerHTML = parseHTML(header.render());
// let bodyHTML = body.render();

console.log({ headerHTML });

let App = document.querySelector('#App');

App.appendChild(headerHTML);
