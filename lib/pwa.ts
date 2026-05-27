export const isPWAInstalled = () => {
  return window.matchMedia(
    '(display-mode: standalone)'
  ).matches;
};