import Vue from 'vue';
import RockScissorsPaper from './LottoGenerator';

new Vue({
    render: createElement => createElement(RockScissorsPaper)
}).$mount('#root');