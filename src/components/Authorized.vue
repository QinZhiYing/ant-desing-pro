<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-06 20:39:45
 * @LastEditTime: 2022-11-08 20:50:55
-->
<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-06 20:39:45
 * @LastEditTime: 2022-11-06 20:52:10
-->
<script>
import { check } from "@/utils/auth";
export default {
  name: "Authorized",
  functional: true,
  props: {
    auth: {
      type: Array,
      required: true,
    },
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    return check(props.auth) ? scopedSlots.default() : null;
  },
};
</script>
