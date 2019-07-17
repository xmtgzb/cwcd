<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang = "scss" type='text/css'>
@media screen and  (min-width: 833PX) and (max-width: 919PX){
  html{font-size: 10PX !important;}
}
@media screen and  (min-width: 920PX) and (max-width: 1006PX){
  html{font-size: 11PX !important;}
}
@media screen and  (min-width: 1007PX) and (max-width: 1093PX){
  html{font-size: 12PX !important;}
}
@media screen and  (min-width: 1094PX) and (max-width: 1180PX){
  html{font-size: 13PX !important;}
}
@media screen and  (min-width: 1181PX) and (max-width: 1267PX){
  html{font-size: 14PX !important;}
}
@media screen and  (min-width: 1268PX) and (max-width: 1354PX){
  html{font-size: 15PX !important;}
}
@media screen and  (min-width: 1355PX) and (max-width: 1441PX){
  html{font-size: 16PX !important;}
}
@media screen and  (min-width: 1442PX) and (max-width: 1528PX){
  html{font-size: 16PX !important;}
}
@media screen and  (min-width: 1529PX) and (max-width: 1615PX){
  html{font-size: 16PX !important;}
}
@media screen and  (min-width: 1616PX) and (max-width: 1702PX){
  html{font-size: 16PX !important;}
}
@media screen and  (min-width: 1703PX) and (max-width: 1789PX){
  html{font-size: 17PX !important;}
}
@media screen and  (min-width: 1790PX) and (max-width: 1876PX){
  html{font-size: 18PX !important;}
}
@media screen and  (min-width: 1877PX) and (max-width: 1963PX){
  html{font-size: 20PX !important;}
}
@media screen and  (min-width: 1964PX) and (max-width: 2050PX){
  html{font-size: 23PX !important;}
}
@media screen and  (min-width: 2051PX){
  html{font-size: 24PX !important;}
}

body{
  padding: 0!important;
  margin: 0!important;
  height: 100%;

}
html {
  height: 100%;
}


#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60PX; */
  /* position: fixed; */
  height: 100%;

  /* 输入框样式 */
  .input {
    height: 30PX !important;
    min-width: 240px!important;
    width: 75%!important;

    .el-input__inner {
      color: black !important;
      height: 30PX !important;
      padding-right: 20px !important;
    }
    .el-input__icon {
      line-height: 30PX!important;
      width: 25px!important;
      height: 100%!important;
      text-align: center!important;
    }

  }

  .el-form-item__label{
    height: 30PX!important;
    color: black!important;
    padding: 0 5px 0 0 !important;
    line-height: 30PX;
  }

}
</style>
