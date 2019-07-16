<template>
  <el-menu
    :unique-opened="true"
    default-active="0"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="1-1">
        <i class="el-icon-menu"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item index="2-1">
        <i class="el-icon-menu"></i>
        <span slot="title">角色列表</span>
      </el-menu-item>
      <el-menu-item index="2-2">
        <i class="el-icon-menu"></i>
        <span slot="title">权限列表</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang = 'scss' type='text/css'>
.sd {
  background-color: red;

  width: 200px;
  height: 100%;
}
</style>
