# 🎨 Vite X6Flow JS

## 📚 项目介绍

这是一个基于 Vue 3 和 AntV X6 的流程图编辑器项目，提供了丰富的图形编辑功能，支持节点拖拽、连线编辑、画布操作等多种交互方式。项目使用 Vite 构建，具有快速的开发体验和高效的构建性能。

## 🛠️ 技术栈

- **前端框架**：Vue 3 (使用 `<script setup>` 语法)
- **构建工具**：Vite 6.x
- **图形引擎**：AntV X6 2.x
- **UI 组件库**：Naive UI 2.x
- **图标库**：Lucide Vue Next
- **样式处理**：SASS

## ✨ 主要功能

## 📸 功能演示

### 画布与工具栏
![画布操作演示](/public/screenshots/demo-canvas.svg)

画布支持拖拽、缩放、网格背景显示等基础操作，左侧工具栏提供丰富的编辑工具，右下角的小地图方便快速导航。

### 节点编辑
![节点编辑演示](/public/screenshots/demo-nodes.svg)

提供多种预设节点类型和丰富的样式编辑功能，支持自定义节点样式、大小、颜色等属性。

### 🎯 Flow 组件功能

#### 🖱️ 1. 画布操作
- 支持画布拖拽、缩放
- 网格背景显示
- 历史操作（撤销/重做）
- 快捷键支持
- 小地图导航

#### 🔲 2. 节点编辑
- 多种预设节点类型：
  - 基础图形节点（矩形、圆形等）
  - 文本节点
  - 便利贴节点
  - 图片节点
  - 自定义 SVG 节点
- 节点样式编辑：
  - 字体大小、颜色调整
  - 文本对齐方式设置
  - 边框颜色、填充色设置
  - 节点锁定/解锁

#### ↔️ 3. 连线功能
- 多种连线类型：
  - 直线
  - 折线
  - 曲线
- 连线样式定制：
  - 箭头设置
  - 线条颜色、粗细调整
  - 虚线样式
  - 连线文本标注

#### 🛠️ 4. 工具面板
- 左侧工具栏：
  - 选择工具
  - 文本添加
  - 便利贴
  - 图形库
  - 连线设置
  - 图片添加
  - 画笔工具
  - 撤销/重做
- 节点设置面板
- 连线设置面板
- 小地图导航工具

#### 🖐️ 5. 交互能力
- 拖拽创建节点
- 节点选择、移动、调整大小
- 复制/粘贴功能
- 导出图形
- 自由绘制线条

#### 🔄 6. 模式支持
- 编辑模式：完整的编辑功能
- 预览模式：只读展示
- 数据回显：加载已有图形数据

## 🚀 项目环境

### 💻 开发环境

- Node.js 环境
- 包管理器：npm 或 pnpm

### 📦 安装依赖

```bash
npm install
# 或
pnpm install
```

### 🔧 开发模式

```bash
npm run dev
```

### 🏗️ 构建项目

```bash
npm run build
```

### 👀 预览构建结果

```bash
npm run preview
```

## 📝 使用示例

```vue
<template>
  <!-- 编辑模式 -->
  <Flow :id="'flow-' + new Date().getTime()" />
  
  <!-- 预览模式 -->
  <Flow :config="yourFlowData" :id="'flow-preview'" />
  
  <!-- 编辑模式回显 -->
  <Flow :id="'flow-with-data'" />
</template>

<script setup>
import Flow from './components/flow/index.vue';
</script>
```

## 📂 项目结构

- `src/components/flow/` - 流程图组件核心目录
  - `index.vue` - 主组件入口
  - `utils/` - 工具函数
    - `graph.js` - 画布创建与配置
    - `register.js` - 自定义节点注册
  - `components/` - 子组件
    - `panel.vue` - 工具面板
    - `tool/` - 工具组件
      - `nodeSettingTool.vue` - 节点设置工具
      - `edgeSettingTool.vue` - 连线设置工具
      - `mapTool.vue` - 小地图工具
    - `customNode/` - 自定义节点
  - `config.js` - 配置文件
