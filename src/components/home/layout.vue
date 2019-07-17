<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>

          <router-view name="asider" />

        <el-main>
          <router-view name="main" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang = 'scss' type='text/css'>
</style>
