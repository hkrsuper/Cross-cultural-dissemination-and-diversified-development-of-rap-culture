<template>
  <div class="future">
    <h1 class="page-title">说唱文化的未来展望</h1>

    <div class="vision-section">
      <el-card class="vision-card">
        <template #header>
          <div class="card-header">
            <el-icon><Aim /></el-icon>
            <span>未来愿景</span>
          </div>
        </template>
        <p class="vision-text">
          说唱文化将继续作为全球文化交流的重要载体，在保持其核心价值的同时，
          不断吸收新的文化元素，创造更多元化的艺术表现形式。
        </p>
      </el-card>
    </div>

    <div class="trends-section">
      <h2>发展趋势</h2>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(trend, index) in futureTrends" :key="index">
          <el-card class="trend-card">
            <div class="trend-icon">
              <el-icon :size="40">
                <component :is="trend.icon" />
              </el-icon>
            </div>
            <h3>{{ trend.title }}</h3>
            <p>{{ trend.description }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="challenges-section">
      <h2>机遇与挑战</h2>
      <el-collapse>
        <el-collapse-item
          v-for="(item, index) in challenges"
          :key="index"
          :title="item.title"
          :name="index"
        >
          <div class="challenge-content">
            <p>{{ item.description }}</p>
            <el-tag
              v-for="(tag, tagIndex) in item.tags"
              :key="tagIndex"
              :type="tag.type"
              class="challenge-tag"
            >
              {{ tag.text }}
            </el-tag>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="action-section">
      <h2>行动建议</h2>
      <el-steps :active="4" finish-status="success" align-center>
        <el-step
          v-for="(step, index) in actionSteps"
          :key="index"
          :title="step.title"
          :description="step.description"
        />
      </el-steps>
    </div>
  </div>
</template>

<script setup>
import {
  Aim,
  Connection,
  Monitor,
  User,
  Star,
  TrendCharts,
} from "@element-plus/icons-vue";
import {
  ElRow,
  ElCol,
  ElCard,
  ElIcon,
  ElCollapse,
  ElCollapseItem,
  ElSteps,
  ElStep,
  ElTag,
} from "element-plus";

const futureTrends = [
  {
    title: "技术创新",
    description: "AI、VR等新技术将重塑说唱音乐的创作和表演方式。",
    icon: "Monitor",
  },
  {
    title: "文化融合",
    description: "更深层次的文化交流将带来更多创新性的艺术形式。",
    icon: "Connection",
  },
  {
    title: "全球化发展",
    description: "说唱音乐将在更多国家和地区获得本土化发展。",
    icon: "TrendCharts",
  },
];

const challenges = [
  {
    title: "文化保护与创新",
    description: "在保持说唱音乐核心价值的同时，如何推动创新发展。",
    tags: [
      { text: "文化传承", type: "success" },
      { text: "创新发展", type: "warning" },
    ],
  },
  {
    title: "技术应用",
    description: "如何更好地利用新技术提升说唱音乐的表现力和传播力。",
    tags: [
      { text: "AI技术", type: "info" },
      { text: "VR/AR", type: "primary" },
    ],
  },
  {
    title: "市场发展",
    description: "在商业化和艺术性之间找到平衡，推动产业健康发展。",
    tags: [
      { text: "商业模式", type: "danger" },
      { text: "艺术价值", type: "success" },
    ],
  },
];

const actionSteps = [
  {
    title: "文化研究",
    description: "深入研究说唱文化的核心价值和历史发展",
  },
  {
    title: "技术创新",
    description: "探索新技术在说唱音乐中的应用",
  },
  {
    title: "人才培养",
    description: "培养具有创新能力的说唱音乐人才",
  },
  {
    title: "国际交流",
    description: "促进全球说唱文化的交流与合作",
  },
];
</script>

<style scoped>
.future {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2em;
}

.vision-section {
  margin-bottom: 40px;
}

.vision-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

.vision-text {
  font-size: 1.2em;
  line-height: 1.8;
  color: #2c3e50;
  text-align: center;
  padding: 20px;
}

.trends-section {
  margin-bottom: 40px;
}

.trends-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
}

.trend-card {
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
}

.trend-card:hover {
  transform: translateY(-5px);
}

.trend-icon {
  margin-bottom: 20px;
  color: #409eff;
}

.trend-card h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.trend-card p {
  color: #666;
  line-height: 1.6;
}

.challenges-section {
  margin-bottom: 40px;
}

.challenges-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
}

.challenge-content {
  padding: 20px;
}

.challenge-content p {
  margin-bottom: 15px;
  color: #666;
  line-height: 1.6;
}

.challenge-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}

.action-section {
  margin-bottom: 40px;
}

.action-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
}

:deep(.el-step__title) {
  font-size: 1.1em;
}

:deep(.el-step__description) {
  color: #666;
}
</style>
