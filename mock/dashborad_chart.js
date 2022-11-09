/*
 * @Autor: zhiying Qin
 * @Date: 2022-11-07 20:45:13
 * @LastEditTime: 2022-11-07 21:35:33
 */
function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [10, 220, 30, 340, 0, 60];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
