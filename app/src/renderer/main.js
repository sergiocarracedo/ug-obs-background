/**
 *
 * This file is part of ug-obs-background project
 * ug-obs-background is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option)
 * any later version.
 * ug-obs-background is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for
 * more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ug-obs-background. If not, see <http://www.gnu.org/licenses/>.
 *
 * @author      Sergio Carracedo Martinez <info@sergiocarracedo.es>
 * @copyright   2017 Sergio Carracedo Martinez
 * @license     http://www.gnu.org/licenses/lgpl-3.0.txt GNU LGPL 3.0
 *
 */

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
Vue.component('obs-header', require('./components/obs-header.vue'));
Vue.component('obs-footer', require('./components/obs-footer.vue'));
Vue.component('obs-aside', require('./components/obs-aside.vue'));
Vue.component('obs-lightning', require('./components/obs-lightning.vue'));
Vue.component('obs-timer', require('./components/obs-timer.vue'));


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
