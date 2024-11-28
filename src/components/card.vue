<!-- 这个是用来装饰各种衣服的卡片 -->
<template>
  <div class="card">
    <a-card :style="cardStyle" :body-style="{ padding: 0, overflow: 'hidden' }">
      <a-flex justify="space-between">
        <div style="width: 250px">
          <img alt="avatar" :src="`http://127.0.0.1:3007/${state.imagePath}`" :style="imgStyle" />
        </div>
        <a-flex
          vertical
          align="flex-end"
          justify="space-between"
          :style="{ padding: '32px' }"
        >
          <!-- 文本 -->
          <div>
            <a-form :model="state">
              <a-form-item label="季节">
                <span v-if="!isShow">{{ state.season }}</span>
                <a-input v-else v-model:value="state.season"></a-input>
              </a-form-item>

              <a-form-item label="是否加绒">
                <span v-if="!isShow">{{ state.isVans }}</span>
                <a-input v-else v-model:value="state.isVans"></a-input>
              </a-form-item>

              <a-form-item label="备注">
                <span v-if="!isShow">{{ state.remark }}</span>
                <a-textarea v-else v-model:value="state.remark" /> 
              </a-form-item>
            </a-form>
          </div>
          <!-- 按钮 -->
          <a-space class="button">
            <a-button @click="edit(state)" type="primary">编辑</a-button>
            <a-popconfirm
              title="亲，你真的忍心删除我吗"
              ok-text="包的，老弟"
              cancel-text="好吧，妥协"
              @confirm="confirmDelete(state)"
            >
                <a-button type="primary" v-show="!isShow">删除</a-button>
            </a-popconfirm>
            <a-button v-if="isShow" @click="save(state)" type="primary">保存</a-button>
          </a-space>
        </a-flex>
      </a-flex>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, inject } from "vue";
import { editShortSleeve,deleteShortSleeve } from "../api/shortSleeve";
import { message } from 'ant-design-vue';
const { state } = defineProps({
  state: Object,
});

const cardStyle = {
  width: "400px",
};
const imgStyle = {
  display: "block",
  width: "100%",
  height: "100%",
};
const isShow = ref(0);

const save = async(state) => {
  console.log(state)
  const {data:{success}} = await editShortSleeve({
    ...state
  })
  if(success){
    message.success("编辑成功了喵~")
  }
  isShow.value = 0;
};
const edit = async() => {
  isShow.value = 1;
};
// 删除衣服
const confirmDelete = async(state) => {
    const {data:{success}} = await deleteShortSleeve({_id:state._id})
    console.log(success,'su',message)
    if(success){
      message.success('成功删除，寒心了喵~')
      updateList()
    }
}
const updateList = inject('updateList')
</script>

<style scoped>
    .card{
        border: 0.5px solid gray;
        transition: transform 0.3s ease; /* 添加过渡效果，使变化更平滑 */
    }
    .card:hover {
        transform: scale(1.05); /* 将元素放大1.1倍 */
    }
</style>
