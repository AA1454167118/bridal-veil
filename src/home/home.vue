<template>
    <div>
        <div class="topBg">
            <div>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="3"><div class="grid-content bg-purple"><img class="logo" src="../assets/top/logo.png" alt=""></div></el-col>
                </el-row>
                    <!-- <ul>
                        <li><a href="">品牌简介</a></li>
                        <li><a href="">写真作品</a></li>
                        <li><a href="">婚纱婚礼作品</a></li>
                        <li><a href="">孕妇作品</a></li>
                        <li><a href="">费用简介</a></li>
                    </ul> -->
                    <el-row :gutter="20">
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default{
}
</script>
<style scoped>
.topBg{
    margin-top: 0;
    height: 600px;
    background: url("../assets/top/topBg.jpg") no-repeat fixed;
    background-size:100%;
}
.logo{
    width: 20%;
    height: 100%;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
ul{
    margin-left: 200px;
}
li{
    list-style: none;
    float: left;
    margin-left: 30px;
}
li a{
    color:#fff;
    font-family: "华云彩文";
    text-decoration: none;
}
.topTitle{
    margin-left: 100px;
    margin-top: 93px;
}
.titleImg{
    position: absolute;
    top: 100px;
    left: 300px;
    z-index: 0;
}
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
