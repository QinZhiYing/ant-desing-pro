/*
 * @Autor: zhiying Qin
 * @Date: 2022-11-06 01:47:51
 * @LastEditTime: 2022-11-06 21:51:37
 */
export function getCurrentAuthority() {
  return ["admin"];
}

export function check(authority) {
  const current = getCurrentAuthority();
  return current.some((item) => authority.includes(item));
}

export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
