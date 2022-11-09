<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-07 19:19:11
 * @LastEditTime: 2022-11-08 20:03:37
-->
<template>
  <div class="Chart">
    <div ref="chartDom" style="height: 300px"></div>
  </div>
</template>

<script>
import { addListener, removeListener } from "resize-detector";
import * as echarts from "echarts";
export default {
  name: "Chart",
  props: {
    options: {
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  created() {},
  mounted() {
    this.chart = echarts.init(this.$refs.chartDom);

    addListener(this.$refs.chartDom, this.resize);

    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(this.options);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  components: {},
  watch: {},
  methods: {
    resize() {
      this.chart.resize();
    },
  },
};
</script>
<style scoped lang="scss"></style>
