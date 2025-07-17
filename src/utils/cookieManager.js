const CURRENT_SCENARIO_KEY = 'ratio-practice-current';
const COMPLETED_SCENARIOS_KEY = 'ratio-practice-completed';

export const setCookie = (key, value, days = 30) => {
  const cookieName = key === 'currentScenarioIndex' ? CURRENT_SCENARIO_KEY : COMPLETED_SCENARIOS_KEY;
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${cookieName}=${value};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (key) => {
  const cookieName = key === 'currentScenarioIndex' ? CURRENT_SCENARIO_KEY : COMPLETED_SCENARIOS_KEY;
  const nameEQ = cookieName + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const clearCookie = (name) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const clearAllCookies = () => {
  clearCookie(CURRENT_SCENARIO_KEY);
  clearCookie(COMPLETED_SCENARIOS_KEY);
};