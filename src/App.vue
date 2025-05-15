<script setup>
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
} from "element-plus";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const handleSelect = (key) => {
  router.push(key);
};
</script>

<template>
  <el-container class="app-container">
    <el-header class="header">
      <div class="logo">说唱文化</div>
      <el-menu
        mode="horizontal"
        class="nav-menu"
        :default-active="route.path"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/history">发展历程</el-menu-item>
        <el-menu-item index="/global">全球传播</el-menu-item>
        <el-menu-item index="/culture">文化融合</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>

    <el-footer class="footer">
      <p>© 2024 说唱文化传播与多元发展研究</p>
    </el-footer>
  </el-container>
</template>

<style>
.app-container {
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  padding: 0 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 60px;
}

.logo {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
  white-space: nowrap;
}

.nav-menu {
  background: transparent;
  border: none;
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal .el-menu-item {
  color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
}

.el-menu--horizontal .el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.el-menu--horizontal .el-menu-item.is-active {
  color: #409eff;
  border-bottom: 2px solid #409eff;
  background-color: rgba(255, 255, 255, 0.1);
}

.el-main {
  padding: 20px;
  background-color: #f5f7fa;
}

.footer {
  text-align: center;
  background: #1a1a1a;
  color: #fff;
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
