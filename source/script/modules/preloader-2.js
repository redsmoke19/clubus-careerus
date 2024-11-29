const preloader = document.querySelector('[data-preloader="parent"]');
const preloaderTrack = preloader?.querySelector('[data-preloader="load"]');
const preloaderBar = preloader?.querySelector('[data-preloader="bar"]');
const preloaderText = preloader?.querySelector('[data-preloader="text"]');
const preloaderDuration = preloader?.dataset.preloaderDuration;

let loaded = false;
let played = false;

const hide = () => {
  preloader?.classList.add('is-hidden');
}

const showCompletionState = () => {
  if (preloaderTrack) preloaderTrack.classList.add('is-hidden');
  if (preloaderText) preloaderText.classList.add('is-visible');

  document.addEventListener('click', hide);
  document.addEventListener('keydown', hide);
}

const startLoadingTimeout = () => {
  setTimeout(() => {
    played = true;
    if (loaded) {
      showCompletionState()
    }
  }, +preloaderDuration)
};

const listenForPageLoad = () => {
  window.addEventListener('load', () => {
    loaded = true;
    if (played) {
      showCompletionState();
    }
  });
}

const getPreloader = () => {
  if (!preloader) return;

  preloader.classList.add('is-loading');
  preloaderBar.style.animationDuration = `${preloaderDuration}ms`;
  startLoadingTimeout();
  listenForPageLoad();
}

const initPreloader = () => {
  if (!sessionStorage.getItem('preloader')) {
    getPreloader();
    sessionStorage.setItem('preloader', 'true');
  } else {
    if (preloader) preloader.style.display = 'none';
  }
};

export { initPreloader };
