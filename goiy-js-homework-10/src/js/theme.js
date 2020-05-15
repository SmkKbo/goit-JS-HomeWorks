const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const themeSwitchRef = document.querySelector('#theme-switch-control');
  const bodyRef = document.querySelector('body');
  
  themeSwitchRef.addEventListener('change', changeThemeHandler);
  
  function changeThemeHandler() {
    themeSwitchRef.checked
      ? localStorage.setItem('theme', Theme.DARK)
      : localStorage.setItem('theme', Theme.LIGHT);
  
    bodyRef.setAttribute('class', localStorage.getItem('theme'));
  }
  
  bodyRef.setAttribute('class', localStorage.getItem('theme'));
  
  if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitchRef.checked = true;
  }