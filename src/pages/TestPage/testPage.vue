<!-- 这个页面主要是为了用来测试案例 -->
<template>
  <div>
    <a-upload
      v-model:file-list="fileList"
      action="http://127.0.0.1:3007/upload/shortSleeve"
      list-type="picture"
      name="fileList"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        upload
      </a-button>
    </a-upload>
    <br />

  </div> 
  <img alt="avatar" :src="originalPath" :style="imgStyle" />
  <a-button @click="convertPath">点击</a-button>
</template>
<script setup>
import { ref } from 'vue';
const fileList = ref([
]);


let originalPath = ref("http://127.0.0.1:3007/uploads/shortSleeve/fileList-1732711272079.jpeg")
const convertPath = () =>{
    originalPath = originalPath.replace(/\\/g, "/");
    originalPath = 'C:/Users/86184/Desktop/node/' + originalPath
    console.log(originalPath)
}
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>
