parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=document.querySelectorAll(".button"),i=document.querySelector(".field"),l=i.getElementsByTagName("tr"),u=function(e,t){if(t<10){var r=i.insertRow(-1);Array.from({length:e},function(){r.insertCell(-1)})}},s=function(e){e>2&&i.deleteRow(-1)},f=function(t){t<10&&e(l).forEach(function(e){e.insertCell(-1)})},d=function(t){t>2&&e(l).forEach(function(e){e.deleteCell(-1)})},m=function(e,t){var r=document.querySelector(".append-".concat(t)),n=document.querySelector(".remove-".concat(t));e>=10?r.disabled=!0:e<=2?n.disabled=!0:(r.disabled=!1,n.disabled=!1)};a.forEach(function(e){return e.addEventListener("click",function(e){var t=l.length,r=l[0].children.length;switch(e.target.classList[0]){case"append-row":u(r,t);break;case"remove-row":s(t);break;case"append-column":f(r);break;case"remove-column":d(r);break;default:throw Error("This button has no function")}e.target.classList[0].includes("row")?m(l.length,"row"):m(l[0].children.length,"column")})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cfd321c6.js.map