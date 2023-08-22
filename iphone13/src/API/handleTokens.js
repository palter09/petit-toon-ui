const getCookie = (name) => {
  let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}

const setCookie = (name, value, expires) => {
  let date = new Date();
  date.setTime(date.getTime() + expires*1000 - 10);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

export { getCookie, setCookie }