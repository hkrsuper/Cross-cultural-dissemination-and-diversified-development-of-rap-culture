<template>
  <div class="global">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate__animated animate__fadeInDown">
          说唱文化的全球传播
        </h1>
        <p
          class="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s"
        >
          跨越国界，融合多元文化，说唱艺术成为国际文化交流的重要桥梁
        </p>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <div class="map-section">
      <h2 class="section-title">全球说唱文化分布</h2>
      <div class="map-container">
        <div class="map-stats">
          <div class="stat-item animate__animated animate__fadeInLeft">
            <h3>覆盖国家</h3>
            <p class="stat-number">50+</p>
            <p class="stat-desc">说唱文化已在全球超过50个国家落地生根</p>
          </div>
          <div class="stat-item animate__animated animate__fadeInUp">
            <h3>活跃艺术家</h3>
            <p class="stat-number">10000+</p>
            <p class="stat-desc">全球活跃的说唱艺术家数量持续增长</p>
          </div>
          <div class="stat-item animate__animated animate__fadeInRight">
            <h3>年度市场</h3>
            <p class="stat-number">$10B+</p>
            <p class="stat-desc">全球说唱音乐市场年产值超过100亿美元</p>
          </div>
        </div>
      </div>
    </div>

    <div class="regions-section">
      <h2 class="section-title">区域特色</h2>
      <el-row :gutter="30">
        <el-col :span="8" v-for="(region, index) in regions" :key="index">
          <el-card
            class="region-card animate__animated animate__fadeInUp"
            :style="{ animationDelay: index * 0.2 + 's' }"
          >
            <div class="region-icon">
              <el-icon :size="40"><component :is="region.icon" /></el-icon>
            </div>
            <h3>{{ region.title }}</h3>
            <p>{{ region.description }}</p>
            <div class="region-stats">
              <div class="stat">
                <span class="stat-label">艺术家数量</span>
                <span class="stat-value">{{ region.stats.artists }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">音乐风格</span>
                <span class="stat-value">{{ region.stats.styles }}</span>
              </div>
            </div>
            <div class="region-examples">
              <h4>代表作品</h4>
              <ul>
                <li v-for="(example, idx) in region.examples" :key="idx">
                  {{ example }}
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="features-section">
      <h2 class="section-title">跨文化传播特点</h2>
      <el-row :gutter="30">
        <el-col :span="8" v-for="(feature, index) in features" :key="index">
          <el-card
            class="feature-card animate__animated animate__fadeInUp"
            :style="{ animationDelay: index * 0.2 + 's' }"
          >
            <div class="feature-icon">
              <el-icon :size="40"><component :is="feature.icon" /></el-icon>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-examples">
              <h4>典型案例</h4>
              <ul>
                <li v-for="(example, idx) in feature.examples" :key="idx">
                  {{ example }}
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="quote-section">
      <div class="quote-content">
        <p class="quote-text">
          "说唱文化跨越国界，融合多元文化，成为连接不同文明的重要纽带。"
        </p>
      </div>
    </div>

    <div class="fusion-section">
      <h2 class="section-title">文化融合创新</h2>
      <p class="fusion-description">
        通过中日艺术家合作《东渡》，传统说唱艺术现代化转型，非遗与说唱的创新结合，展现了文化融合创新的魅力。
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Connection,
  Promotion,
  Star,
  Location,
  VideoPlay,
  Microphone,
} from "@element-plus/icons-vue";
import { ElCard, ElRow, ElCol, ElIcon } from "element-plus";
import "animate.css/animate.min.css";

const regions = ref([
  {
    icon: "Location",
    title: "东亚地区",
    description: "中日韩三国说唱文化各具特色，融合传统与现代元素。",
    stats: {
      artists: "2000+",
      styles: "5+",
    },
    examples: [
      "中日合作《东渡》融合评弹与能剧",
      "Higher Brothers《Made in China》",
      "广顺社团《文化交织》国际合作",
    ],
  },
  {
    icon: "VideoPlay",
    title: "欧美地区",
    description: "说唱文化的发源地，引领全球说唱音乐发展潮流。",
    stats: {
      artists: "5000+",
      styles: "10+",
    },
    examples: [
      "美国说唱音乐市场占全球40%",
      "欧洲说唱节每年吸引百万观众",
      "国际说唱音乐节影响力持续扩大",
    ],
  },
  {
    icon: "Microphone",
    title: "东南亚地区",
    description: "融合本土文化，发展出独特的说唱风格。",
    stats: {
      artists: "1500+",
      styles: "8+",
    },
    examples: [
      "泰国说唱融合传统音乐元素",
      "越南说唱展现本土文化特色",
      "马来西亚说唱市场快速增长",
    ],
  },
]);

const features = ref([
  {
    icon: "Connection",
    title: "文化融合创新",
    description: "说唱艺术与不同文化传统相结合，创造新的艺术形式。",
    examples: [
      "中日艺术家合作《东渡》",
      "传统说唱艺术现代化转型",
      "非遗与说唱的创新结合",
    ],
  },
  {
    icon: "Promotion",
    title: "国际传播交流",
    description: "通过音乐节、合作项目等方式促进国际文化交流。",
    examples: ["国际说唱音乐节", "跨国艺术家合作项目", "全球说唱文化论坛"],
  },
  {
    icon: "Star",
    title: "创新发展模式",
    description: "探索说唱文化在不同地区的本土化发展路径。",
    examples: ["方言说唱特色发展", "传统艺术现代化转型", "新媒体传播创新"],
  },
]);
</script>

<style scoped>
.global {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  position: relative;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 60px;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/images/东渡.webp") center/cover;
  opacity: 0.2;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3em;
  margin-bottom: 20px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3em;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
}

.map-section {
  margin: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a2e;
  font-size: 2.2em;
  font-weight: 700;
}

.map-container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  flex: 1;
  min-width: 200px;
}

.stat-item h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.2em;
  font-weight: 600;
}

.stat-number {
  font-size: 2.5em;
  font-weight: 800;
  color: #409eff;
  margin: 10px 0;
}

.stat-desc {
  color: #666;
  font-size: 0.9em;
}

.regions-section {
  margin: 60px 0;
}

.region-card {
  height: 100%;
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.region-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.region-icon {
  margin-bottom: 20px;
  color: #409eff;
}

.region-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.3em;
  font-weight: 600;
}

.region-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.region-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(64, 158, 255, 0.05);
  border-radius: 10px;
}

.stat {
  text-align: center;
}

.stat-label {
  display: block;
  color: #666;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.stat-value {
  color: #409eff;
  font-weight: 600;
  font-size: 1.1em;
}

.region-examples {
  background: rgba(64, 158, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
}

.region-examples h4 {
  color: #409eff;
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: 600;
}

.region-examples ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.region-examples li {
  color: #666;
  padding: 5px 0;
  font-size: 0.95em;
  position: relative;
  padding-left: 15px;
}

.region-examples li::before {
  content: "•";
  color: #409eff;
  position: absolute;
  left: 0;
}

.features-section {
  margin: 60px 0;
}

.feature-card {
  height: 100%;
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  margin-bottom: 20px;
  color: #409eff;
}

.feature-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.3em;
  font-weight: 600;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.feature-examples {
  background: rgba(64, 158, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
}

.feature-examples h4 {
  color: #409eff;
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: 600;
}

.feature-examples ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-examples li {
  color: #666;
  padding: 5px 0;
  font-size: 0.95em;
  position: relative;
  padding-left: 15px;
}

.feature-examples li::before {
  content: "•";
  color: #409eff;
  position: absolute;
  left: 0;
}

.quote-section {
  margin: 60px 0;
  text-align: center;
}

.quote-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
}

.quote-text {
  font-size: 1.5em;
  color: #1a1a2e;
  font-style: italic;
  line-height: 1.6;
  margin: 0;
}

.fusion-section {
  margin: 60px 0;
  background: url("/images/东渡2.jpg") center/cover;
  background-attachment: fixed;
  padding: 80px 0;
  position: relative;
}

.fusion-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
}

@media (max-width: 768px) {
  .el-col {
    width: 100%;
    margin-bottom: 20px;
  }

  .hero-title {
    font-size: 2em;
  }

  .hero-subtitle {
    font-size: 1.1em;
  }

  .section-title {
    font-size: 1.8em;
  }

  .quote-text {
    font-size: 1.2em;
  }

  .stat-item {
    min-width: 150px;
  }

  .stat-number {
    font-size: 2em;
  }
}
</style>
