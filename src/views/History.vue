<template>
  <div class="history">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate__animated animate__fadeInDown">
          说唱文化的发展历程
        </h1>
        <p
          class="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s"
        >
          从纽约布朗克斯到中国本土，探索说唱文化的演变与创新
        </p>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <div class="timeline-section">
      <h2 class="section-title">重要历史节点</h2>
      <el-timeline>
        <el-timeline-item
          v-for="(event, index) in timelineEvents"
          :key="index"
          :timestamp="event.time"
          placement="top"
          :type="event.type"
          :color="event.color"
          :hollow="event.hollow"
          class="animate__animated animate__fadeIn"
          :style="{ animationDelay: index * 0.2 + 's' }"
        >
          <el-card class="timeline-card">
            <h3>{{ event.title }}</h3>
            <p>{{ event.content }}</p>
            <div class="event-tags" v-if="event.tags">
              <el-tag
                v-for="tag in event.tags"
                :key="tag"
                :type="tag.type"
                effect="plain"
                class="event-tag"
              >
                {{ tag.text }}
              </el-tag>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div class="features-section">
      <h2 class="section-title">本土化发展特点</h2>
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
              <h4>代表作品</h4>
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
          "说唱文化在中国的发展历程，是一部融合传统与现代、本土与国际的文化创新史。"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Timer,
  Connection,
  Star,
  ChatDotRound,
  VideoPlay,
  Microphone,
} from "@element-plus/icons-vue";
import {
  ElTimeline,
  ElTimelineItem,
  ElCard,
  ElTag,
  ElRow,
  ElCol,
  ElIcon,
} from "element-plus";
import "animate.css/animate.min.css";

const timelineEvents = ref([
  {
    time: "1970年代",
    title: "说唱文化的起源",
    content:
      "说唱音乐在纽约布朗克斯区诞生，成为黑人社区表达自我和社会批判的重要形式。",
    type: "primary",
    color: "#409EFF",
    hollow: true,
    tags: [
      { text: "文化起源", type: "success" },
      { text: "社会表达", type: "warning" },
    ],
  },
  {
    time: "1990年代末",
    title: "中国说唱的萌芽",
    content:
      "中国年轻人通过打口磁带接触说唱文化，北京的王波组建'隐藏乐队'，台湾的热狗（哈狗帮）开始活跃。",
    type: "success",
    color: "#67C23A",
    hollow: true,
    tags: [
      { text: "地下发展", type: "info" },
      { text: "早期探索", type: "warning" },
    ],
  },
  {
    time: "2000年代初",
    title: "本土化探索",
    content:
      "广顺社团等地下说唱团体开始探索本土化发展，创作具有地方特色的说唱作品。",
    type: "warning",
    color: "#E6A23C",
    hollow: true,
    tags: [
      { text: "本土化", type: "success" },
      { text: "方言特色", type: "warning" },
    ],
  },
  {
    time: "2017年",
    title: "主流化突破",
    content:
      "《中国有嘻哈》节目让说唱文化进入主流视野，GAI、欧阳靖等歌手走红，推动商业化发展。",
    type: "danger",
    color: "#F56C6C",
    hollow: true,
    tags: [
      { text: "商业化", type: "danger" },
      { text: "主流化", type: "success" },
    ],
  },
  {
    time: "2024年",
    title: "跨文化创新",
    content:
      "中日艺术家合作《东渡》，将苏州评弹与日本能剧结合，展现说唱在跨文化叙事中的潜力。",
    type: "info",
    color: "#909399",
    hollow: true,
    tags: [
      { text: "国际交流", type: "info" },
      { text: "文化创新", type: "success" },
    ],
  },
]);

const features = ref([
  {
    icon: "Microphone",
    title: "方言与地域特色",
    description: "中国说唱逐渐融入地方文化，展现独特的文化魅力。",
    examples: [
      "C-BLOCK《大闹天宫》《七里八里》展现湖湘文化",
      "诺米《阿普的思念》结合彝语元素",
      "广顺社团《老北京杀器》展现北京特色",
    ],
  },
  {
    icon: "VideoPlay",
    title: "综艺推动商业化",
    description: "通过综艺节目推动说唱文化进入主流市场。",
    examples: [
      "《中国有嘻哈》推动说唱文化普及",
      "GAI、欧阳靖等歌手走红",
      "资本与地下文化的融合与冲突",
    ],
  },
  {
    icon: "ChatDotRound",
    title: "社会表达与批判",
    description: "说唱成为社会批判和底层叙事的重要载体。",
    examples: [
      "诺米《谢天谢帝》表达对选秀制度的不满",
      "河南说唱之神《工厂》反映工业化影响",
      "广顺社团《文明新风赞》宣传政策",
    ],
  },
]);
</script>

<style scoped>
.history {
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
  background: url("@/assets/images/马街书会开场.webp") center/cover;
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

.timeline-section {
  margin: 60px 0;
  /* background: url("@/assets/images/说唱人.jpeg") center/cover; */
  background-attachment: fixed;
  padding: 80px 0;
  position: relative;
}

.timeline-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0);
  z-index: 1;
}

.timeline {
  position: relative;
  z-index: 2;
}

.timeline-item {
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a2e;
  font-size: 2.2em;
  font-weight: 700;
}

.timeline-card {
  margin-bottom: 20px;
  border-radius: 15px;
  transition: all 0.3s ease;
  background: white;
}

.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.timeline-card h3 {
  color: #1a1a2e;
  margin-bottom: 10px;
  font-size: 1.3em;
  font-weight: 600;
}

.timeline-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.event-tag {
  border-radius: 20px;
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

  .timeline-card {
    margin: 0 10px;
  }
}
</style>
