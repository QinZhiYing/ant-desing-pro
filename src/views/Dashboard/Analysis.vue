<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 09:46:09
 * @LastEditTime: 2022-11-08 21:12:39
-->
<template>
  <div class="Analysis"><Chart :options="options" v-if="key"></Chart></div>
</template>

<script>
import Chart from "@/components/Chart.vue";
export default {
  name: "Analysis",
  data() {
    return {
      options: {},

      key: 0,
    };
  },
  created() {
    this.getChartData();
  },
  components: {
    Chart,
  },
  watch: {},
  methods: {
    getChartData() {
      this.$request({
        url: "/api/dashborad/chart1",
        method: "get",
      }).then((res) => {
        console.log(res.data);
        // 指定图表的配置项和数据
        var option = {
          title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          legend: {
            data: ["销量"],
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: res.data,
            },
          ],
        };
        this.options = { ...option };
        this.key = 1;
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
