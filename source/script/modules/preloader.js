class Preloader {
  constructor() {
    this.el = document.querySelector('[data-preloader="parent"]');
    this.loadEl = this.el?.querySelector('[data-preloader="load"]');
    this.loadBarEl = this.el?.querySelector('[data-preloader="bar"]');
    this.textEl = this.el?.querySelector('[data-preloader="text"]');
    this.timeDuration = this.el?.dataset.preloaderDuration;
    this.loaded = false;
    this.played = false;

    this.hide = this.hide.bind(this);
  }

  init() {
    if (!this.el) return;

    this.el.classList.add('is-loading');
    this.loadBarEl.style.animationDuration = this.timeDuration + 'ms';
    this.startLoadingTimeout();
    this.listenForPageLoad();
  }

  startLoadingTimeout() {
    setTimeout(() => {
      this.played = true;
      if (this.loaded) {
        this.showCompletionState();
      }
    }, this.timeDuration);
  }

  listenForPageLoad() {
    window.addEventListener('load', () => {
      this.loaded = true;
      if (this.played) {
        this.showCompletionState();
      }
    });
  }

  showCompletionState() {
    if (this.loadEl) this.loadEl.classList.add('is-hidden');
    if (this.textEl) this.textEl.classList.add('is-visible');

    document.addEventListener('click', this.hide);
    document.addEventListener('keydown', this.hide);
  }

  hide() {
    this.el?.classList.add('is-hidden');
  }
}

const initPreloader = () => {
  if (!sessionStorage.getItem('preloader')) {
    new Preloader().init();
    sessionStorage.setItem('preloader', 'true');
  } else {
    const preloaderEl = document.querySelector('[data-preloader="parent"]');
    if (preloaderEl) preloaderEl.style.display = 'none';
  }
};

export { initPreloader };
