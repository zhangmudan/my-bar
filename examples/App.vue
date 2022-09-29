<template>
  <div id="app">
   
    <m-card
            :imgSrcList="['/images/test.jpeg','/images/test.jpeg']"
            :width="270"
            :img-height="152"
    >
      z牡丹，古龙武侠小说《多情剑客无情剑》及其衍生作品中的第一女主角。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">多情剑客无情剑</div>
          <div class="level"></div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
