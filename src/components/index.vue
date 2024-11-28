<template>
  <div style="display: flex; margin-top: 5px">
    <div style="width: 256px; flex-shrink: 0;">
      <a-menu
        style="height: 100%;"
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="state.collapsed"
        :items="items"
      ></a-menu>
    </div>
    <div style="flex-grow: 1; border-radius: 9px; margin-left: 10px;">
      <shirtComponent></shirtComponent>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, h } from "vue";
import shirtComponent from "./shirtComponent.vue";
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
const state = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});
const items = reactive([
  {
    key: "1",
    icon: () => h(PieChartOutlined),
    label: "短袖",
    title: "短袖",
  },
  {
    key: "2",
    icon: () => h(DesktopOutlined),
    label: "",
    title: "外套",
  },
  {
    key: "3",
    icon: () => h(InboxOutlined),
    label: "Option 3",
    title: "短裤",
  },
  {
    key: "sub1",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "长裤",
  },
  {
    key: "sub2",
    icon: () => h(MailOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
  {
    key: "sub2",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
  {
    key: "sub2",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

/* 短袖 */
const shirt = [
  {
  },
]
/* 外套 */
const coat = [

]
/* 短裤 */
const shortPants = [
  {

  }
]
/* 长裤 */
const longPants = [
  {

  }
] 
</script>
