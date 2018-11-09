import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["What are you drinking?"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
