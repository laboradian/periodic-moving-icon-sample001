/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'babel-polyfill'

//import _ from 'lodash'

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

require('file-loader?name=../../dist/img/[name].[ext]!../img/icon.png');

console.log('%c 🌈 Laboradian.com 🌈 %c http://laboradian.com ',
  'background: #2383BF; color: #fff; font-size: 1.4em;',
  'background: #e3e3e3; color: #000; margin-bottom: 1px; padding-top: 4px; padding-bottom: 1px;');

window.addEventListener('load', () => {

  /**
   * DOM要素を定期的にアニメーションする。
   * @param {object} elm - DOM element
   * @param {string} className - CSS class name
   * @param {number} speed - 何秒おきに動くか
   */
  const addPeriodicMoving = (elm, className, speed) => {
    let cnt = 0;
    const loop = () => {
      if (cnt % parseInt(speed*30) === 0) {
        elm.classList.toggle(className);
      }
      cnt++;
      window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
  };

  addPeriodicMoving(
    document.querySelector('#targetIcon1'),
    'shake1',
    4
  );

  addPeriodicMoving(
    document.querySelector('#targetIcon2'),
    'shake2',
    3
  );

});
