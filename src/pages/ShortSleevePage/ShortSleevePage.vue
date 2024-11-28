<template>
  <div style="border: solid 1px gray; border-radius: 10px">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <shirtComponent :shirtList="shirtList" @updateList="getList"/>
    </div>
  </div>
</template>

<script setup>
import shirtComponent from "../../components/shirtComponent.vue";
import { onMounted, reactive,ref,provide } from "vue";
import { searchShortSleeve } from "../../api/shortSleeve";

let shirtList = reactive([]);
const loading = ref(true);

const getList = async () => {
  try {
    const {
      data: { list },
    } = await searchShortSleeve();
    shirtList.length = 0
    console.log(list);
    shirtList.push(...list);
  } catch (error) {
    console.error('获取列表数据失败:', error);
    // 可以在这里根据错误情况给用户一个提示，例如设置一个错误消息状态
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await getList();
  console.log("shi", shirtList);
});
provide('updateList',getList)
</script>

<style scoped></style>