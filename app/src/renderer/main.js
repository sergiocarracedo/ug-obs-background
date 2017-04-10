import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from './vuex/store'
import * as types from './vuex/mutation-types'
import 'font-awesome/css/font-awesome.css'
import { ipcRenderer } from 'electron'
import menu from './menu';


//Read UserGroup folder and get all components
import ugComponents from './components/UserGroup';

var ugList = [];
for (var ugComponent in ugComponents) {
    Vue.component(ugComponents[ugComponent].name, ugComponents[ugComponent]);
    ugList.push(ugComponents[ugComponent].name);
}

Vue.component('settings-dialog', require('./components/Settings/SettingsDialog.vue'));
Vue.component('settings-talk', require('./components/Settings/SettingsTalk.vue'));
Vue.component('obs-header', require('./components/obs-header.vue'));
Vue.component('obs-footer', require('./components/obs-footer.vue'));


import App from './App'

Vue.use(Electron);
Vue.use(Resource);
Vue.use(VueMaterial);



Vue.config.debug = true;

/* eslint-disable no-new */
const vue = new Vue({
    store,
    ...App,
    data: {
        ugList
    }
}).$mount('#app')
