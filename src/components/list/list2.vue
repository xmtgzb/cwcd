<template>
  <div>
    <el-button @click="query" type="primary">查询</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="空气质量" width="180"></el-table-column>
      <el-table-column prop="day" label="时间" width="180"></el-table-column>
      <el-table-column prop="wea" label="天气"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { tianqi } from "@/api/index";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions(["Tianqi"]),

    query() {
      this.Tianqi().then(res => {});
    }
  },
  computed: {
    tableData() {
      return this.$store.state.qw.id;
    }
  }
};
</script>

<style lang = 'scss' type='text/css'>
</style>
