<template>
  <div>
    <div style="display: flex; justify-content: flex-end; margin: 10px">
      <a-button type="primary" @click="showModal">新增</a-button>
    </div>
    <a-modal
      v-model:open="open"
      title="新增短袖"
      @ok="onSubmit()"
      ok-text="提交"
      cancel-text="取消"
    >
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="季节">
          <a-checkbox-group v-model:value="formState.season">
            <a-checkbox value="1" name="type">春</a-checkbox>
            <a-checkbox value="2" name="type">夏</a-checkbox>
            <a-checkbox value="3" name="type">秋</a-checkbox>
            <a-checkbox value="4" name="type">冬</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="加绒">
          <a-radio-group v-model:value="formState.isVans">
            <a-radio value="1">是</a-radio>
            <a-radio value="0">否</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="备注">
          <a-textarea v-model:value="formState.remark" />
        </a-form-item>

        <a-form-item label="图片">
          <a-upload
            v-model:file-list="formState.fileList"
            action="http://127.0.0.1:3007/upload/shortSleeve"
            list-type="picture"
            name="fileList"
            @change="getFileList"
          >
            <a-button>
              <upload-outlined></upload-outlined>
              上传
            </a-button>
          </a-upload>
          <br />
        </a-form-item>
      </a-form>
    </a-modal>
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 10px;
      "
    >
      <card
        :state="shirt"
        v-for="shirt in shirtList"
        style="margin-bottom: 10px"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, defineProps, onMounted, defineEmits } from "vue";
import { addShortSleeve } from "";
import card from "./card.vue";
import { message } from "ant-design-vue";
const open = ref(false);
const { shirtList } = defineProps({
  shirtList: Array,
});

const emit = defineEmits(["updateList"]);
const showModal = () => {
  open.value = true;
  formState.season = [];
  formState.isVans = "";
  formState.remark = "";
  formState.fileList = []
  console.log("shirtComponent拿到了shirtlist", shirtList);
};
//   open.value = false;
const formState = reactive({
  season: [],
  isVans: "",
  remark: "",
  fileList: [],
});

//用来设置接口参数映射
const changeParams = (formState) => {
  const { season,fileList,isVans,remark } = formState;
  // 季节的枚举
  const reflectSeason = {
    1: "春",
    2: "夏",
    3: "秋",
    4: "冬",
  };
  // 使用map方法遍历season数组，将每个元素对应的季节字符串提取出来，然后使用join方法拼接成一个字符串
  const seasonStrings = season.map((item) => reflectSeason[item]).join("");
  // 将拼接好的字符串赋值给changeSeason.value，因为changeSeason是一个ref对象，要修改其值需要通过.value属性
  return {
    isVans:isVans,
    remark:remark,
    season: seasonStrings,
    imagePath:fileList[0].response
  };
};

// 用来拿到后端传递过来的图片地址
const getFileList = ({ file, fileList }) => {
  if (file.status === 'done') {
    message.success('上传成功咯，记得保存鸭~')
    console.log('上传成功，返回数据:', file.response);
    console.log(formState.fileList[0].response,'form')
  } else if (file.status === 'error') {
    console.error('上传失败，错误信息:', file.error);
  }
};
/* 用来储存短袖列表 */
const onSubmit = async () => {
  // 调用新增接口
  // 调整参数映射
  const reflectParams = changeParams(formState);
  const {
    data: { success },
  } = await addShortSleeve({
    ...reflectParams,
  });
  if (success) {
    message.success("恭喜牢大，新增成功喵~");
    emit("updateList");
  }
  console.log("添加成功", success);
  open.value = false;
};

const labelCol = {
  style: {
    width: "150px",
  },
};
const wrapperCol = {
  span: 14,
};
onMounted(() => {});
</script>