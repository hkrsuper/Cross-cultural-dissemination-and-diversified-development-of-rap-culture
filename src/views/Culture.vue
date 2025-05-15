<template>
  <div class="culture">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate__animated animate__fadeInDown">
          文化融合与创新
        </h1>
        <p
          class="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s"
        >
          探索说唱文化如何与传统艺术形式融合，创造独特的文化表达
        </p>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <div class="fusion-section animate__animated animate__fadeIn">
      <h2 class="section-title">传统与现代的融合</h2>
      <el-row :gutter="30">
        <el-col :span="12" v-for="(fusion, index) in fusionCases" :key="index">
          <el-card class="fusion-card" :body-style="{ padding: '0px' }">
            <div class="card-image" :class="fusion.bgClass"></div>
            <div class="card-content">
              <div class="card-header">
                <el-icon class="icon-wrapper"
                  ><component :is="fusion.icon"
                /></el-icon>
                <span>{{ fusion.title }}</span>
              </div>
              <p class="card-text">{{ fusion.description }}</p>
              <div class="fusion-examples">
                <h4>代表作品</h4>
                <ul>
                  <li v-for="(example, idx) in fusion.examples" :key="idx">
                    {{ example }}
                  </li>
                </ul>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="features-section animate__animated animate__fadeIn">
      <h2 class="section-title">文化融合特点</h2>
      <el-row :gutter="30">
        <el-col :span="8" v-for="(feature, index) in features" :key="index">
          <el-card class="feature-card" :body-style="{ padding: '0px' }">
            <div class="card-image" :class="feature.bgClass"></div>
            <div class="card-content">
              <div class="card-header">
                <el-icon class="icon-wrapper"
                  ><component :is="feature.icon"
                /></el-icon>
                <span>{{ feature.title }}</span>
              </div>
              <p class="card-text">{{ feature.description }}</p>
              <div class="feature-stats">
                <span class="stat-tag">{{ feature.stats.projects }}个项目</span>
                <span class="stat-tag"
                  >{{ feature.stats.artists }}位艺术家</span
                >
                <span class="stat-tag">{{ feature.stats.impact }}%影响力</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="impact-section animate__animated animate__fadeIn">
      <h2 class="section-title">文化影响</h2>
      <el-row :gutter="30">
        <el-col :span="6" v-for="(impact, index) in impacts" :key="index">
          <div class="impact-card">
            <el-icon class="impact-icon"
              ><component :is="impact.icon"
            /></el-icon>
            <h3>{{ impact.title }}</h3>
            <p>{{ impact.description }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { Connection, Star, Timer, School } from "@element-plus/icons-vue";
import { ElRow, ElCol, ElCard, ElIcon } from "element-plus";
import "animate.css/animate.min.css";

const fusionCases = [
  {
    title: "传统说唱艺术",
    icon: "Connection",
    description: "将传统说唱艺术与现代说唱形式相结合，推动文化传承与创新",
    examples: ["苏州评弹与说唱的融合", "传统曲艺元素的现代演绎"],
    bgClass: "traditional-bg",
  },
  {
    title: "跨界艺术合作",
    icon: "Star",
    description: "说唱与其他艺术形式的跨界合作，创造新的艺术表现形式",
    examples: ["说唱与舞蹈的融合", "说唱与视觉艺术的结合"],
    bgClass: "crossover-bg",
  },
];

const features = [
  {
    title: "文化传承",
    icon: "School",
    description: "通过说唱形式传承和发扬传统文化，让传统艺术焕发新生",
    stats: {
      projects: "50+",
      artists: "200+",
      impact: "85",
    },
    bgClass: "heritage-bg",
  },
  {
    title: "艺术创新",
    icon: "Star",
    description: "说唱艺术与其他艺术形式的创新融合，探索新的表达方式",
    stats: {
      projects: "30+",
      artists: "150+",
      impact: "75",
    },
    bgClass: "innovation-bg",
  },
  {
    title: "社会影响",
    icon: "Timer",
    description: "说唱文化对社会议题的关注和表达，推动社会进步",
    stats: {
      projects: "40+",
      artists: "180+",
      impact: "80",
    },
    bgClass: "social-bg",
  },
];

const impacts = [
  {
    title: "文化传承",
    icon: "School",
    description: "推动传统文化在现代语境下的传承与发展",
  },
  {
    title: "艺术创新",
    icon: "Star",
    description: "促进不同艺术形式的融合与创新",
  },
  {
    title: "社会表达",
    icon: "Connection",
    description: "为年轻人提供表达社会观点的平台",
  },
  {
    title: "国际交流",
    icon: "Timer",
    description: "促进中外文化的交流与理解",
  },
];
</script>

<style scoped>
.culture {
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
  background: url("/images/中国煤矿文工团在北京邮电大学演出《说唱大运河》.jpg")
    center/cover;
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

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a2e;
  font-size: 2.2em;
  font-weight: 700;
}

.fusion-section {
  margin: 60px 0;
}

.fusion-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0);
  z-index: 1;
}

.fusion-card {
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.fusion-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.traditional-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("images/中国曲艺.webp");
}

.crossover-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("images/现代说唱.png");
}

.heritage-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("images/rap1.jpg");
}

.innovation-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("images/说唱人.jpeg");
}

.social-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("images/中国煤矿文工团在北京邮电大学演出《说唱大运河》.jpg");
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

.fusion-examples {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.fusion-examples h4 {
  color: #1a1a2e;
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: 600;
}

.fusion-examples ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fusion-examples li {
  color: #666;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.fusion-examples li:last-child {
  border-bottom: none;
}

.features-section {
  margin: 60px 0;
}

.feature-card {
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.feature-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.stat-tag {
  background: rgba(64, 158, 255, 0.1);
  color: #409eff;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9em;
}

.impact-section {
  margin: 60px 0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url("/images/嘻哈.webp") center/cover;
  background-attachment: fixed;
  padding: 80px 0;
  position: relative;
}

.impact-section::before {
  display: none;
}

.impact-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.impact-icon {
  font-size: 40px;
  color: #409eff;
  margin-bottom: 20px;
}

.impact-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.3em;
  font-weight: 600;
}

.impact-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
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

  .impact-card {
    margin-bottom: 20px;
  }
}
</style>
