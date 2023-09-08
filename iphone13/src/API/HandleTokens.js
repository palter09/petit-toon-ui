const getCookie = (name) => {
  let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}

const setCookie = (name, value, expires) => {
  let date = new Date();
  date.setTime(date.getTime() + expires*1000 - 10);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

const deleteCookie = (name) => {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export { getCookie, setCookie, deleteCookie }