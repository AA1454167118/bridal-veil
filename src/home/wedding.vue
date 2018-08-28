<template>
<div class="row-bg">
   <el-row type="flex" class="row-bg" :gutter="40" >
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-1.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-2.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-3.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-4.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-5.png" alt=""></el-col>
  </el-row>
  <h1>
    <font style="vertical-align: inherit;">
      婚礼
    </font>
  </h1>
  <el-row type="flex" class="row-bg" :gutter="40" >
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-6.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-7.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-8.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-9.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-10.png" alt=""></el-col>
  </el-row>

  <el-row type="flex" class="row-bg-s" :gutter="50" >
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-11.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-12.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-13.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-14.png" alt=""></el-col>
    <el-col :span="5"><img class="bg-purple" src="../assets/img/300-14.png" alt=""></el-col>
  </el-row>
</div>
</template>
<script>
export default {
  name: 'wedding',
  data () {

  }
}
</script>
<style>
div{
  margin: 0;
  background-color: #f9fafc;
  padding: 10px 0;
}
  .el-row {
    margin: 0 auto;
    padding: 0;
  }
  h1{
    color: #4d4d4d;
    font-family: 'Open Sans Light';
    font-size: 40px;
    font-weight: lighter;
  }
  a {
    text-decoration:none;
    vertical-align: inherit;
  }
  .bg-purple {
    width: 100%;
  }
  .row-bg {
    padding: 10px 0;
  }
   .row-bg-s {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
