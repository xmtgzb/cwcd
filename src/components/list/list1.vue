<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="8">
          <el-form-item label-width='160px' label="活动名称">
            <el-input class='input' v-model="input" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width='160px' label="活动区域">
            <el-select class='input' v-model="input" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width='160px' label="活动时间">
            <el-date-picker class='input' type="date" placeholder="选择日期" v-model="input" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style lang = 'scss' type='text/css'>
</style>
