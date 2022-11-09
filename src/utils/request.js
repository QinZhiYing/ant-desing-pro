import axios from "axios";
import { notification } from "ant-design-vue";

function request(options = {}) {
  return axios(options)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      const { status } = error.response;
      notification.error({
        // eslint-disable-next-line no-unused-vars
        message: (h) => {
          return (
            <div>
              <span style="color: red">错误提示： {status}</span>
            </div>
          );
        },

        description: "你的接口失败，检查你的网络",
      });
      return Promise.reject(error);
    });
}
export default request;
