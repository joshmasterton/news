export const getLightMode = (setLightMode) => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
    setLightMode(localStorage.getItem('theme'));
    return localStorage.getItem('theme');
  }
  if (localStorage.getItem('theme')) {
    setLightMode(localStorage.getItem('theme'));
    return localStorage.getItem('theme');
  }
  return null;
};

export const switchLightMode = (setLightMode) => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light');
    setLightMode(localStorage.getItem('theme'));
    return localStorage.getItem('theme');
  }
  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'dark');
    setLightMode(localStorage.getItem('theme'));
    return localStorage.getItem('theme');
  }
  return null;
};
