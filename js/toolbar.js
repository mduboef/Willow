var Willow;(()=>{"use strict";var o,e={};o=e,Object.defineProperty(o,"__esModule",{value:!0}),o.showModal=void 0,o.showModal=function(o){document.querySelectorAll(".modal").forEach((o=>o.style.display="none"));const e=document.getElementById(o);null!==e&&(e.style.display="initial")},document.querySelectorAll("#toolbar .dropdown > button").forEach((o=>{o.addEventListener("click",(()=>{const e=o.parentNode?.querySelector(".dropdown-menu");null!=e&&(e.style.display="none"===e.style.display?"block":"none",document.querySelectorAll("#toolbar .dropdown > .dropdown-menu").forEach((o=>{e!==o&&(o.style.display="none")})))}))})),window.addEventListener("click",(o=>{o.target instanceof Element&&o.target.matches("#toolbar .dropdown > button")||document.querySelectorAll("#toolbar .dropdown > .dropdown-menu").forEach((o=>o.style.display="none"))})),Willow=e})();