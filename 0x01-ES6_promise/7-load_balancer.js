import loadBalancer from './loadBalancer.js';

const chinaDownload = new Promise((resolve) => {
  setTimeout(() => resolve('China Download Complete'), 3000);
});

const USDownload = new Promise((resolve) => {
  setTimeout(() => resolve('US Download Complete'), 1000);
});
