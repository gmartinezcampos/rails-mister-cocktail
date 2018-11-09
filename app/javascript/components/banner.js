import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Pick your poison"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
