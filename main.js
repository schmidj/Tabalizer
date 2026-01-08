console.log("The extension is up and running");

const images = document.getElementsByTagName('img');
const runtime = chrome?.runtime || browser?.runtime;

for (const elt of images) {
  elt.src = runtime.getURL("Loki.jpg");
  elt.alt = 'an alt text';
}