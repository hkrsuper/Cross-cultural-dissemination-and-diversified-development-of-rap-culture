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

    <!-- 添加音乐播放器 -->
    <div class="music-player">
      <iframe
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
        width="330"
        height="86"
        src="//music.163.com/outchain/player?type=2&id=478507889&auto=1&height=66"
      ></iframe>
    </div>
  </el-container>
</template>

<style>
.app-container {
  min-height: 100vh;
  background: #f5f7fa;
}

.header {
  background: #1a1a2e;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
}

.logo {
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  white-space: nowrap;
}

.nav-menu {
  flex: 1;
  margin-left: 40px;
  background: transparent;
  border: none;
}

.nav-menu .el-menu-item {
  color: white;
  font-size: 1.1em;
  height: 60px;
  line-height: 60px;
}

.nav-menu .el-menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-menu .el-menu-item.is-active {
  color: #409eff;
  border-bottom: 2px solid #409eff;
}

.el-main {
  padding-top: 80px;
  padding-bottom: 60px;
}

.footer {
  background: #1a1a2e;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 音乐播放器样式 */
.music-player {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.music-player:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
