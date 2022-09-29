<template>
  <div class="m-card" :style="width ? {width: width + 'px'} : {}">
    <div class="m-card-img" :style="imgHeight ? {height: imgHeight + 'px'} : {}">
      <el-carousel :height="imgHeight + 'px'">
        <el-carousel-item v-for="(item,index) in imgSrcList" :key="item + '_' + index">
           <img :src="item.url || item" alt="img">
          </el-carousel-item>
        </el-carousel>
    </div>
    <div v-if="summary" class="m-card-summary">
      {{summary}}
    </div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-card',
  props: {
    width: { // 卡片宽度
      type: Number,
      default: 0
    },
    imgSrcList: { // 卡片图片地址
      type: Array,
      default: ()=>[]
    },
    imgHeight: { // 卡片图片高度
      type: Number,
      default: 0
    },
    summary: { // 卡片的概要
      type: String,
      default: ''
    }
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>
