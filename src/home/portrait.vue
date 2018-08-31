<template>
<div id="box_fix">
    <div class="g-width">
        <el-row :gutter="5">
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic1.jpg" alt="上左一"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic2.jpg" alt="上左二"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic3.jpg" alt="上左二"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic4.jpg" alt="上左二"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic5.jpg" alt="下左一"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic6.jpg" alt="下左二"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic7.jpg" alt="下左三"></el-col>
            <el-col :xs="8" :sm="6" :md="6" ><img src="../assets/portrait/pic8.jpg" alt="下左四"></el-col>
        </el-row>
    </div>
</div>
</template>
<script>

export default {

}
</script>
<style scoped>
.g-width {
    margin: 0 auto;
    width: 1220px;
}
img {
    width: 295px;
    height: 430px;
    border-radius: 15px;
}
.g-width >>> ul,li {
    list-style:none;
    float:left;
}
/*boot测试*/
.el-col {
    border-radius: 4px;
    margin-bottom: 10px;
}
</style>
