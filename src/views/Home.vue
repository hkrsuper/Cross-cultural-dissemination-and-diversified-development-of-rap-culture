<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate__animated animate__fadeInDown">
          说唱文化的跨文化传播与多元发展
        </h1>
        <p
          class="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s"
        >
          从纽约布朗克斯到全球舞台，说唱文化跨越国界，融合传统与现代，展现独特的文化魅力
        </p>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <div class="content-section">
      <el-row :gutter="30">
        <el-col :span="8">
          <el-card class="content-card" :body-style="{ padding: '0px' }">
            <div
              class="card-image"
              style="background-image: url('/images/东渡.webp')"
            ></div>
            <div class="card-content">
              <div class="card-header">
                <el-icon class="icon-wrapper"><Timer /></el-icon>
                <span>本土化发展</span>
              </div>
              <p class="card-text">
                从地下小众到主流市场，中国说唱文化经历了独特的发展历程。方言与地域特色的融入，让说唱艺术展现出丰富的文化内涵。
              </p>
              <div class="card-highlights">
                <span class="highlight-tag">方言特色</span>
                <span class="highlight-tag">地域文化</span>
                <span class="highlight-tag">商业发展</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="content-card" :body-style="{ padding: '0px' }">
            <div
              class="card-image"
              style="background-image: url('/images/说唱人.jpeg')"
            ></div>
            <div class="card-content">
              <div class="card-header">
                <el-icon class="icon-wrapper"><Promotion /></el-icon>
                <span>国际文化交流</span>
              </div>
              <p class="card-text">
                说唱文化成为跨文化传播的桥梁，从《东渡》到《文化交织》，展现说唱在跨文化叙事中的独特魅力。
              </p>
              <div class="card-highlights">
                <span class="highlight-tag">中日合作</span>
                <span class="highlight-tag">国际交流</span>
                <span class="highlight-tag">文化融合</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="content-card" :body-style="{ padding: '0px' }">
            <div
              class="card-image"
              style="background-image: url('/images/东渡2.jpg')"
            ></div>
            <div class="card-content">
              <div class="card-header">
                <el-icon class="icon-wrapper"><Connection /></el-icon>
                <span>传统与现代融合</span>
              </div>
              <p class="card-text">
                非遗与说唱的完美结合，推动传统艺术的现代化转型，让古老文化焕发新的生机。
              </p>
              <div class="card-highlights">
                <span class="highlight-tag">非遗传承</span>
                <span class="highlight-tag">艺术创新</span>
                <span class="highlight-tag">教育传播</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="quote-section">
      <div class="quote-content">
        <p class="quote-text">
          "说唱文化不仅是一种音乐形式，更是社会表达、文化传承和国际交流的重要媒介。"
        </p>
      </div>
    </div>

    <div class="highlight-section">
      <h2 class="section-title">核心特色</h2>
      <el-row :gutter="30">
        <el-col :span="12">
          <div class="highlight-card">
            <h3>社会表达与底层叙事</h3>
            <p>说唱艺术成为社会批判和底层叙事的载体，通过音乐传递社会声音。</p>
            <ul class="highlight-list">
              <li>诺米的《谢天谢帝》表达对选秀制度的不满</li>
              <li>河南说唱之神的《工厂》反映工业化影响</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="highlight-card">
            <h3>教育与文化传承</h3>
            <p>
              说唱艺术在高校教育中发挥重要作用，推动传统文化在年轻群体中的传播。
            </p>
            <ul class="highlight-list">
              <li>高校与曲艺结合的创新实践</li>
              <li>非遗进校园的传承模式</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { Timer, Promotion, Connection } from "@element-plus/icons-vue";
import { ElRow, ElCol, ElCard, ElIcon } from "element-plus";
import "animate.css/animate.min.css";
</script>

<style scoped>
.home {
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
  background: url("/images/中国有嘻哈.webp") center/cover;
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

.content-section {
  margin: 60px 0;
  background: url("/images/布鲁克林区.jpeg") center/cover;
  background-attachment: fixed;
  padding: 80px 0;
  position: relative;
}

.content-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1;
}

.content-card {
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.content-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.card-content {
  padding: 25px;
  background: white;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.icon-wrapper {
  font-size: 24px;
  color: #409eff;
  background: rgba(64, 158, 255, 0.1);
  padding: 10px;
  border-radius: 12px;
}

.card-text {
  color: #666;
  line-height: 1.7;
  font-size: 1.05em;
  margin-bottom: 20px;
}

.card-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.highlight-tag {
  background: rgba(64, 158, 255, 0.1);
  color: #409eff;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9em;
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

.highlight-section {
  margin: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a2e;
  font-size: 2.2em;
  font-weight: 700;
}

.highlight-card {
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.highlight-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.3em;
  font-weight: 600;
}

.highlight-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.highlight-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlight-list li {
  color: #666;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.highlight-list li:last-child {
  border-bottom: none;
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
}
</style>
