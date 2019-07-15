<template>
  <div>      
       <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>

export default {

  created () {
    let add = this.$store.state.add.one
    console.log(add)
  },

data() {

    return {

    };





  },



};
</script>

<style lang = 'scss' type='text/css'>

</style>
