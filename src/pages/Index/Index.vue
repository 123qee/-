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
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, watch, h } from "vue";
  import { useRoute, useRouter } from 'vue-router'
  import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  } from "@ant-design/icons-vue";
  
  const router = useRouter();
  
  const state = reactive({
    collapsed: false,
    selectedKeys: ["shortSleeve"],
    openKeys: ["clothes"],
    preOpenKeys: ["clothes"],
  });
  
  const items = reactive([
    {
      key: "shortSleeve",
      icon: () => h(PieChartOutlined),
      label: "短袖",
      title: "短袖",
      onClick: () => {
        router.push({ name: "ShortSleeve" });
      },
    },
    {
      key: "longSleeve",
      icon: () => h(DesktopOutlined),
      label: "长袖",
      title: "长袖",
      onClick: () => {
        router.push({ name: "LongSleeve" });
      },
    },
    {
      key: "longPants",
      icon: () => h(InboxOutlined),
      label: "长裤",
      title: "长裤",
      onClick: () => {
        router.push({ name: "LongPants" });
      },
    },
    {
      key: "shortPants",
      icon: () => h(MailOutlined),
      label: "短裤",
      title: "短裤",
      onClick: () => {
        router.push({ name: "ShortPants" });
      },
    },
    {
      key: "coat",
      icon: () => h(AppstoreOutlined),
      label: "外套",
      title: "外套",
      onClick: () => {
      router.push({ name: "Coat" });
      },
    },
    {
      key: "shoes",
      icon: () => h(DesktopOutlined),
      label: "鞋子",
      title: "鞋子",
      onClick: () => {
        router.push({ name: "Shoes" });
      },
    }

  ]);
  
  watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    }
  );
  </script>
