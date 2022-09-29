import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import '../components/css/card.scss'
import Card from '../components/lib/card/index'
Vue.use(Card);

/* 全部引入 */
// import 'ui-demo-sw31/dist/css/index.css';
// import UI from 'ui-demo-sw31';
// Vue.use(UI);

/* 局部引入 */
// import 'ui-demo-sw31/dist/css/demo.css';
// import Demo from 'ui-demo-sw31';
// Vue.use(Demo);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
