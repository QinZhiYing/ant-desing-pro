/*
 * @Autor: zhiying Qin
 * @Date: 2022-11-07 20:45:13
 * @LastEditTime: 2022-11-12 21:40:48
 */
function form(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = { message: "OK" };
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = form;
