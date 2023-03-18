export const debounce = (fn,delay = 100) => {
  let timer;
  return (...args) => {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context,args),delay);
  }
}