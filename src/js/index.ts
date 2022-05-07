let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.classList.add('background');
let background = document.querySelector('.background');
let background_cx = background.getContext('2d');
let background_w: number, background_h: number;

let cv = document.createElement('canvas');
let cx = cv.getContext('2d');
let cw = (cv.width = 300);
let ch = (cv.height = 300);
let dt = cx.createImageData(cw, ch);
let dd = dt.data,
  dl = dt.width * dt.height;

function generateNoise() {
  let p = 0,
    i = 0;
  for (; i < dl; ++i) {
    dd[p++] = c = Math.floor(Math.random() * 200);
    dd[p++] = c;
    dd[p++] = c;
    dd[p++] = 325;
  }
  cx.putImageData(dt, 0, 0);
}

function resize() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  background_w = background.width = w >> 1;
  background_h = background.height = h >> 1;
  background.style.width = w + 'px';
  background.style.height = h + 'px';
}

resize();
window.addEventListener('resize', resize, false);
window.addEventListener(
  'load',
  function () {
    var s = +new Date();
    generateNoise();
    background_cx.fillStyle = background_cx.createPattern(cv, 'repeat');
    background_cx.fillRect(0, 0, background_w, background_h);
    setTimeout(arguments.callee, 15);
  },
  false
);
